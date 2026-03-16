import { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { lessons, Question } from '../data/lessons';
import { Mascot, Mood } from './Mascot';
import { Check, X, ArrowLeft, Shield } from 'lucide-react';
import { playCorrectSound, playIncorrectSound } from '../utils/sound';
import { getLessonIcon, getUiMockup } from './LessonUiElements';
import { useAccessibility } from '../contexts/AccessibilityContext';

interface LessonViewProps {
  lessonId: string;
  onComplete: (xpEarned: number, correctAnswers: number, totalQuestions: number, passed: boolean) => void;
  onClose: () => void;
}

export function LessonView({ lessonId, onComplete, onClose }: LessonViewProps) {
  const { settings } = useAccessibility();
  const lesson = lessons.find((l) => l.id === lessonId);
  
  if (!lesson) return null;

  const [queue, setQueue] = useState<Question[]>(lesson.questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [mascotMood, setMascotMood] = useState<Mood>('thinking');
  const [attempts, setAttempts] = useState<Record<string, number>>({});

  // Multiple Choice State
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  // Fill Blank State
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  // Match State
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchError, setMatchError] = useState(false);
  const [shuffledLeft, setShuffledLeft] = useState<string[]>([]);
  const [shuffledRight, setShuffledRight] = useState<string[]>([]);

  // Scenario State
  const [selectedScenarioOption, setSelectedScenarioOption] = useState<string | null>(null);

  // Click Element State
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);

  // Order State
  const [orderedItems, setOrderedItems] = useState<string[]>([]);
  const [availableOrderItems, setAvailableOrderItems] = useState<string[]>([]);

  // True/False State
  const [selectedBoolean, setSelectedBoolean] = useState<boolean | null>(null);

  // Visual Choice State
  const [selectedVisualOption, setSelectedVisualOption] = useState<string | null>(null);

  const currentQuestion = queue[currentIndex];
  const progress = ((lesson.questions.length - queue.length + currentIndex) / lesson.questions.length) * 100;

  const getCorrectAnswerText = () => {
    if (currentQuestion.type === 'multiple_choice') {
      return currentQuestion.options[currentQuestion.correctAnswerIndex];
    }
    if (currentQuestion.type === 'fill_blank') {
      return currentQuestion.correctAnswer;
    }
    if (currentQuestion.type === 'scenario') {
      return currentQuestion.options.find(o => o.isCorrect)?.text || '';
    }
    if (currentQuestion.type === 'click_element') {
      return "Poprawny element"; // Or something more descriptive
    }
    if (currentQuestion.type === 'order') {
      return currentQuestion.items.join(' ➔ ');
    }
    if (currentQuestion.type === 'true_false') {
      return currentQuestion.isTrue ? "Prawda" : "Fałsz";
    }
    if (currentQuestion.type === 'visual_choice') {
      return "Poprawny obrazek";
    }
    return '';
  };

  // Reset states when currentQuestion changes
  useEffect(() => {
    setIsChecking(false);
    setIsCorrect(null);
    setSelectedOption(null);
    setSelectedWord(null);
    setMatchedPairs([]);
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchError(false);
    setSelectedScenarioOption(null);
    setSelectedElementId(null);
    setOrderedItems([]);
    setSelectedBoolean(null);
    setSelectedVisualOption(null);
    setMascotMood('thinking');

    if (currentQuestion.type === 'match') {
      setShuffledLeft([...currentQuestion.pairs.map(p => p.left)].sort(() => Math.random() - 0.5));
      setShuffledRight([...currentQuestion.pairs.map(p => p.right)].sort(() => Math.random() - 0.5));
    }
    if (currentQuestion.type === 'order') {
      setOrderedItems([]);
      setAvailableOrderItems([...currentQuestion.items].sort(() => Math.random() - 0.5));
    }
  }, [currentQuestion]);

  // Match effect
  useEffect(() => {
    if (selectedLeft && selectedRight && currentQuestion.type === 'match') {
      const isCorrectPair = currentQuestion.pairs.find(p => p.left === selectedLeft && p.right === selectedRight);
      if (isCorrectPair) {
        playCorrectSound();
        setMatchedPairs(prev => [...prev, selectedLeft]);
        setSelectedLeft(null);
        setSelectedRight(null);
        setMascotMood('happy');
      } else {
        setAttempts(prev => ({ ...prev, [currentQuestion.id]: (prev[currentQuestion.id] || 0) + 1 }));
        playIncorrectSound();
        setMatchError(true);
        setMascotMood('sad');
        setTimeout(() => {
          setSelectedLeft(null);
          setSelectedRight(null);
          setMatchError(false);
          setMascotMood('thinking');
        }, 1000);
      }
    }
  }, [selectedLeft, selectedRight, currentQuestion]);

  const handleCheck = () => {
    setIsChecking(true);
    let correct = false;
    if (currentQuestion.type === 'multiple_choice') {
      correct = selectedOption === currentQuestion.correctAnswerIndex;
    } else if (currentQuestion.type === 'fill_blank') {
      correct = selectedWord === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'scenario') {
      const option = currentQuestion.options.find(o => o.id === selectedScenarioOption);
      correct = option ? option.isCorrect : false;
    } else if (currentQuestion.type === 'click_element') {
      correct = selectedElementId === currentQuestion.correctElementId;
    } else if (currentQuestion.type === 'order') {
      correct = JSON.stringify(orderedItems) === JSON.stringify(currentQuestion.items);
    } else if (currentQuestion.type === 'true_false') {
      correct = selectedBoolean === currentQuestion.isTrue;
    } else if (currentQuestion.type === 'visual_choice') {
      const option = currentQuestion.options.find(o => o.id === selectedVisualOption);
      correct = option ? option.isCorrect : false;
    }
    
    setIsCorrect(correct);
    if (correct) {
      playCorrectSound();
      setMascotMood('happy');
    } else {
      setAttempts(prev => ({ ...prev, [currentQuestion.id]: (prev[currentQuestion.id] || 0) + 1 }));
      playIncorrectSound();
      setMascotMood('sad');
    }
  };

  const handleContinue = (wasCorrect: boolean) => {
    if (wasCorrect) {
      if (currentIndex === queue.length - 1) {
        const scorableQuestions = lesson.questions.filter(q => q.type !== 'info');
        const totalQuestions = scorableQuestions.length;
        
        let correctCount = 0;
        scorableQuestions.forEach(q => {
          // If attempts < 2, it means they failed 0 or 1 times. 
          // 2 failed attempts means it's marked as wrong.
          if ((attempts[q.id] || 0) < 2) {
            correctCount++;
          }
        });

        const percentage = totalQuestions === 0 ? 100 : (correctCount / totalQuestions) * 100;
        const passed = percentage >= 35;
        const finalXp = Math.round((percentage / 100) * 10);

        onComplete(finalXp, correctCount, totalQuestions, passed);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    } else {
      const newQueue = [...queue];
      const failedQuestion = newQueue.splice(currentIndex, 1)[0];
      newQueue.push({ ...failedQuestion });
      setQueue(newQueue);
    }
  };

  const handleInfoContinue = () => {
    playCorrectSound();
    handleContinue(true);
  };

  const renderQuestionContent = () => {
    switch (currentQuestion.type) {
      case 'info':
        return (
          <div className="text-center w-full">
            {currentQuestion.uiMockup ? getUiMockup(currentQuestion.uiMockup) : getLessonIcon(currentQuestion.icon)}
            <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6">{currentQuestion.title}</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700">
              {currentQuestion.content}
            </p>
          </div>
        );
      case 'multiple_choice':
        return (
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-8 text-center">{currentQuestion.question}</h2>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isWrong = isChecking && isSelected && !isCorrect;
              const isRight = isChecking && index === currentQuestion.correctAnswerIndex;

              let buttonClass = "w-full p-4 rounded-2xl border-2 text-left text-xl font-medium transition-all active:scale-95 ";
              if (isChecking) {
                if (isRight) buttonClass += "bg-emerald-100 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-400";
                else if (isWrong) buttonClass += "bg-rose-100 dark:bg-rose-900 border-rose-500 text-rose-700 dark:text-rose-400";
                else buttonClass += "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-400 dark:text-stone-500 opacity-50";
              } else {
                if (isSelected) buttonClass += "bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-blue-400 ring-2 ring-blue-200 dark:ring-blue-900";
                else buttonClass += "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 hover:border-stone-300 dark:hover:border-stone-600 border-b-4";
              }

              return (
                <motion.button
                  key={index}
                  onClick={() => !isChecking && setSelectedOption(index)}
                  disabled={isChecking}
                  className={buttonClass}
                  whileHover={!isChecking ? { scale: 1.02 } : {}}
                  whileTap={!isChecking ? { scale: 0.98 } : {}}
                >
                  {option}
                </motion.button>
              );
            })}
          </div>
        );
      case 'fill_blank':
        return (
          <div className="w-full flex flex-col items-center gap-8">
            <p className="text-2xl text-center leading-relaxed text-stone-800 dark:text-stone-100">
              {currentQuestion.textBefore}
              <span className={`inline-block min-w-[120px] border-b-4 mx-2 text-center font-bold px-4 py-1 rounded-lg ${selectedWord ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-blue-400' : 'border-stone-300 dark:border-stone-600 text-transparent'}`}>
                {selectedWord || '...'}
              </span>
              {currentQuestion.textAfter}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {currentQuestion.options.map(opt => {
                const isSelected = selectedWord === opt;
                const isWrong = isChecking && isSelected && !isCorrect;
                const isRight = isChecking && opt === currentQuestion.correctAnswer;

                let btnClass = "px-6 py-3 rounded-2xl border-2 text-xl font-medium transition-all active:scale-95 ";
                if (isChecking) {
                  if (isRight) btnClass += "bg-emerald-100 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-400";
                  else if (isWrong) btnClass += "bg-rose-100 dark:bg-rose-900 border-rose-500 text-rose-700 dark:text-rose-400";
                  else btnClass += "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-400 dark:text-stone-500 opacity-50";
                } else {
                  if (isSelected) btnClass += "bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-blue-400 ring-2 ring-blue-200 dark:ring-blue-900";
                  else btnClass += "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 border-b-4";
                }

                return (
                  <button key={opt} onClick={() => !isChecking && setSelectedWord(opt)} disabled={isChecking} className={btnClass}>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        );
      case 'match':
        return (
          <div className="w-full flex flex-col items-center gap-8">
            <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 text-center">{currentQuestion.instruction}</h2>
            <div className="w-full flex justify-between gap-4">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-4">
                {shuffledLeft.map(left => {
                  const isMatched = matchedPairs.includes(left);
                  const isSelected = selectedLeft === left;
                  const isError = isSelected && matchError;
                  
                  let btnClass = "p-4 rounded-2xl border-2 text-center font-medium transition-all ";
                  if (isMatched) btnClass += "bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-400 dark:text-stone-500 opacity-50";
                  else if (isError) btnClass += "bg-rose-100 dark:bg-rose-900 border-rose-500 text-rose-700 dark:text-rose-400";
                  else if (isSelected) btnClass += "bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-blue-400 ring-2 ring-blue-200 dark:ring-blue-900";
                  else btnClass += "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 border-b-4 active:scale-95";

                  return (
                    <motion.button 
                      key={left} 
                      disabled={isMatched || matchError} 
                      onClick={() => !isMatched && !matchError && setSelectedLeft(left)} 
                      className={btnClass}
                      animate={isError ? { x: [-5, 5, -5, 5, 0] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      {left}
                    </motion.button>
                  );
                })}
              </div>
              {/* Right Column */}
              <div className="flex-1 flex flex-col gap-4">
                {shuffledRight.map(right => {
                  const isMatched = currentQuestion.pairs.some(p => matchedPairs.includes(p.left) && p.right === right);
                  const isSelected = selectedRight === right;
                  const isError = isSelected && matchError;
                  
                  let btnClass = "p-4 rounded-2xl border-2 text-center font-medium transition-all ";
                  if (isMatched) btnClass += "bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-400 dark:text-stone-500 opacity-50";
                  else if (isError) btnClass += "bg-rose-100 dark:bg-rose-900 border-rose-500 text-rose-700 dark:text-rose-400";
                  else if (isSelected) btnClass += "bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-blue-400 ring-2 ring-blue-200 dark:ring-blue-900";
                  else btnClass += "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 border-b-4 active:scale-95";

                  return (
                    <motion.button 
                      key={right} 
                      disabled={isMatched || matchError} 
                      onClick={() => !isMatched && !matchError && setSelectedRight(right)} 
                      className={btnClass}
                      animate={isError ? { x: [-5, 5, -5, 5, 0] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      {right}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      case 'scenario':
        return (
          <div className="w-full flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center">{currentQuestion.title}</h2>
            <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700 mb-4">
              <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed">
                {currentQuestion.scenarioText}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedScenarioOption === option.id;
                const isWrong = isChecking && isSelected && !isCorrect;
                const isRight = isChecking && option.isCorrect;

                let buttonClass = "w-full p-4 rounded-2xl border-2 text-left text-xl font-medium transition-all active:scale-95 ";
                if (isChecking) {
                  if (isRight) buttonClass += "bg-emerald-100 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-400";
                  else if (isWrong) buttonClass += "bg-rose-100 dark:bg-rose-900 border-rose-500 text-rose-700 dark:text-rose-400";
                  else buttonClass += "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-400 dark:text-stone-500 opacity-50";
                } else {
                  if (isSelected) buttonClass += "bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-blue-400 ring-2 ring-blue-200 dark:ring-blue-900";
                  else buttonClass += "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 hover:border-stone-300 dark:hover:border-stone-600 border-b-4";
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => !isChecking && setSelectedScenarioOption(option.id)}
                    disabled={isChecking}
                    className={buttonClass}
                  >
                    {option.text}
                  </button>
                );
              })}
            </div>
          </div>
        );
      case 'order':
        return (
          <LayoutGroup>
            <div className="w-full flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center">{currentQuestion.instruction}</h2>
              
              {/* Selected Items */}
              <div className="flex flex-col gap-3 min-h-[80px] p-4 rounded-3xl bg-stone-50 dark:bg-stone-800 border-2 border-dashed border-stone-200 dark:border-stone-700">
                {orderedItems.length === 0 && (
                  <p className="text-center text-stone-400 dark:text-stone-500 italic py-4">Wybierz elementy poniżej w odpowiedniej kolejności</p>
                )}
                {orderedItems.map((item, index) => {
                    const isWrong = isChecking && !isCorrect;
                    const isRight = isChecking && isCorrect;

                    let buttonClass = "w-full p-4 rounded-2xl border-2 text-left text-xl font-medium flex items-center gap-4 ";
                    if (isChecking) {
                      if (isRight) buttonClass += "bg-emerald-100 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-400";
                      else if (isWrong) buttonClass += "bg-rose-100 dark:bg-rose-900 border-rose-500 text-rose-700 dark:text-rose-400";
                    } else {
                      buttonClass += "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 hover:border-stone-300 dark:hover:border-stone-600 border-b-4 cursor-pointer active:scale-95";
                    }

                    return (
                      <motion.div
                        key={item}
                        layoutId={`order-item-${item}`}
                        layout
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        onClick={() => {
                          if (isChecking) return;
                          setOrderedItems(prev => prev.filter(i => i !== item));
                          setAvailableOrderItems(prev => [...prev, item]);
                        }}
                        className={buttonClass}
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">
                          {index + 1}
                        </div>
                        <span>{item}</span>
                      </motion.div>
                    );
                  })}
                </div>

              {/* Available Items */}
              {availableOrderItems.length > 0 && (
                <div className="flex flex-col gap-3 mt-2">
                  {availableOrderItems.map((item) => (
                      <motion.div
                        key={item}
                        layoutId={`order-item-${item}`}
                        layout
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        onClick={() => {
                          if (isChecking) return;
                          setAvailableOrderItems(prev => prev.filter(i => i !== item));
                          setOrderedItems(prev => [...prev, item]);
                        }}
                        className="w-full p-4 rounded-2xl border-2 bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 hover:border-stone-300 dark:hover:border-stone-600 border-b-4 cursor-pointer active:scale-95 text-left text-xl font-medium flex items-center gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center font-bold text-stone-500 dark:text-stone-400 shrink-0">
                          +
                        </div>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                </div>
              )}
            </div>
          </LayoutGroup>
        );
      case 'true_false':
        return (
          <div className="w-full flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center">Prawda czy Fałsz?</h2>
            <div className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700 mb-4">
              <p className="text-2xl text-center text-stone-700 dark:text-stone-200 font-medium leading-relaxed">
                "{currentQuestion.statement}"
              </p>
            </div>
            <div className="flex gap-4">
              {[true, false].map((val) => {
                const isSelected = selectedBoolean === val;
                const isWrong = isChecking && isSelected && !isCorrect;
                const isRight = isChecking && val === currentQuestion.isTrue;

                let buttonClass = "flex-1 p-6 rounded-2xl border-2 text-center text-2xl font-bold transition-all active:scale-95 ";
                if (isChecking) {
                  if (isRight) buttonClass += "bg-emerald-100 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-400";
                  else if (isWrong) buttonClass += "bg-rose-100 dark:bg-rose-900 border-rose-500 text-rose-700 dark:text-rose-400";
                  else buttonClass += "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-400 dark:text-stone-500 opacity-50";
                } else {
                  if (isSelected) buttonClass += "bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-blue-400 ring-2 ring-blue-200 dark:ring-blue-900";
                  else buttonClass += "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 border-b-4";
                }

                return (
                  <button
                    key={val.toString()}
                    onClick={() => !isChecking && setSelectedBoolean(val)}
                    disabled={isChecking}
                    className={buttonClass}
                  >
                    {val ? 'Prawda' : 'Fałsz'}
                  </button>
                );
              })}
            </div>
          </div>
        );
      case 'visual_choice':
        return (
          <div className="w-full flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center">{currentQuestion.question}</h2>
            <div className="flex flex-col gap-6">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedVisualOption === option.id;
                const isWrong = isChecking && isSelected && !isCorrect;
                const isRight = isChecking && option.isCorrect;

                let buttonClass = "w-full p-4 rounded-2xl border-4 transition-all active:scale-95 ";
                if (isChecking) {
                  if (isRight) buttonClass += "bg-emerald-50 dark:bg-emerald-900 border-emerald-500";
                  else if (isWrong) buttonClass += "bg-rose-50 dark:bg-rose-900 border-rose-500";
                  else buttonClass += "bg-stone-50 dark:bg-stone-900 border-stone-200 dark:border-stone-700 opacity-50";
                } else {
                  if (isSelected) buttonClass += "bg-blue-50 dark:bg-blue-900 border-blue-500 ring-4 ring-blue-200 dark:ring-blue-900";
                  else buttonClass += "bg-stone-50 dark:bg-stone-900 border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600";
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => !isChecking && setSelectedVisualOption(option.id)}
                    disabled={isChecking}
                    className={buttonClass}
                  >
                    <div className="pointer-events-none">
                      {getUiMockup(option.uiMockup)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      case 'click_element':
        return (
          <div className="w-full flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2 text-center">{currentQuestion.title}</h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 text-center mb-4">{currentQuestion.instruction}</p>
            
            <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-700 overflow-hidden">
              {/* Mock UI Header */}
              <div className="bg-stone-100 dark:bg-stone-900 px-4 py-2 border-b border-stone-200 dark:border-stone-700 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 ml-2 font-mono">
                  {currentQuestion.uiType === 'email' ? 'Poczta Email' : currentQuestion.uiType === 'sms' ? 'Wiadomości SMS' : 'Przeglądarka'}
                </div>
              </div>
              
              {/* Mock UI Body */}
              <div className="p-6 flex flex-col gap-4">
                {currentQuestion.uiType === 'email' && (
                  <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700 overflow-hidden shadow-sm">
                    {/* Email Header */}
                    <div className="bg-stone-50 dark:bg-stone-800 p-4 border-b border-stone-200 dark:border-stone-700">
                      <button 
                        onClick={() => !isChecking && setSelectedElementId('subject')}
                        className={`text-left w-full p-2 -ml-2 rounded-lg transition-colors ${selectedElementId === 'subject' ? 'bg-blue-100 dark:bg-blue-900 ring-2 ring-blue-500' : 'hover:bg-stone-200 dark:hover:bg-stone-700'}`}
                      >
                        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">{currentQuestion.uiData.subject}</h3>
                      </button>
                      
                      <div className="flex items-center gap-3 mt-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
                          {currentQuestion.uiData.sender.charAt(0)}
                        </div>
                        <button 
                          onClick={() => !isChecking && setSelectedElementId('sender')}
                          className={`text-left flex-1 p-2 -ml-2 rounded-lg transition-colors ${selectedElementId === 'sender' ? 'bg-blue-100 dark:bg-blue-900 ring-2 ring-blue-500' : 'hover:bg-stone-200 dark:hover:bg-stone-700'}`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                            <span className="font-bold text-stone-800 dark:text-stone-200">
                              {currentQuestion.uiData.sender.split('<')[0]}
                            </span>
                            {currentQuestion.uiData.sender.includes('<') && (
                              <span className="text-sm text-stone-500 dark:text-stone-400">
                                &lt;{currentQuestion.uiData.sender.split('<')[1]}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-stone-400 mt-0.5">do mnie ▾</div>
                        </button>
                      </div>
                    </div>
                    
                    {/* Email Body */}
                    <div className="p-6">
                      <button 
                        onClick={() => !isChecking && setSelectedElementId('body')}
                        className={`text-left w-full p-4 -m-4 rounded-lg transition-colors text-stone-700 dark:text-stone-300 whitespace-pre-wrap ${selectedElementId === 'body' ? 'bg-blue-100 dark:bg-blue-900 ring-2 ring-blue-500' : 'hover:bg-stone-50 dark:hover:bg-stone-800'}`}
                      >
                        {currentQuestion.uiData.body}
                      </button>
                      
                      {currentQuestion.uiData.linkText && (
                        <div className="mt-8 flex justify-center">
                          <button 
                            onClick={() => !isChecking && setSelectedElementId('link')}
                            className={`inline-block px-8 py-3 rounded-md font-medium transition-colors ${selectedElementId === 'link' ? 'bg-blue-600 text-white ring-4 ring-blue-200 dark:ring-blue-900' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                          >
                            {currentQuestion.uiData.linkText}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {currentQuestion.uiType === 'sms' && (
                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => !isChecking && setSelectedElementId('sender')}
                      className={`text-center py-2 border-b border-stone-200 dark:border-stone-700 transition-colors rounded-t-lg ${selectedElementId === 'sender' ? 'bg-blue-100 dark:bg-blue-900 ring-2 ring-blue-500' : 'hover:bg-stone-50 dark:hover:bg-stone-700'}`}
                    >
                      <span className="text-sm text-stone-500 dark:text-stone-400">Nadawca</span>
                      <div className="font-medium text-stone-800 dark:text-stone-200">{currentQuestion.uiData.sender}</div>
                    </button>
                    <div className="flex justify-start">
                      <div className="bg-stone-100 dark:bg-stone-700 rounded-2xl rounded-tl-sm p-4 max-w-[85%] text-stone-800 dark:text-stone-200">
                        <button 
                          onClick={() => !isChecking && setSelectedElementId('body')}
                          className={`text-left w-full p-1 rounded transition-colors ${selectedElementId === 'body' ? 'bg-blue-200 dark:bg-blue-800 ring-2 ring-blue-500' : 'hover:bg-stone-200 dark:hover:bg-stone-600'}`}
                        >
                          {currentQuestion.uiData.body}
                        </button>
                        {currentQuestion.uiData.linkText && (
                          <button 
                            onClick={() => !isChecking && setSelectedElementId('link')}
                            className={`mt-2 text-blue-600 dark:text-blue-400 underline break-all p-1 rounded transition-colors ${selectedElementId === 'link' ? 'bg-blue-200 dark:bg-blue-800 ring-2 ring-blue-500' : 'hover:bg-blue-50 dark:hover:bg-blue-900'}`}
                          >
                            {currentQuestion.uiData.linkText}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {currentQuestion.uiType === 'browser_warning' && (
                  <div className="flex flex-col items-center text-center gap-4 py-8">
                    <button 
                      onClick={() => !isChecking && setSelectedElementId('warningTitle')}
                      className={`text-2xl font-bold text-rose-600 dark:text-rose-400 p-2 rounded-lg transition-colors ${selectedElementId === 'warningTitle' ? 'bg-blue-100 dark:bg-blue-900 ring-2 ring-blue-500' : 'hover:bg-rose-50 dark:hover:bg-rose-900'}`}
                    >
                      {currentQuestion.uiData.warningTitle}
                    </button>
                    <button 
                      onClick={() => !isChecking && setSelectedElementId('warningText')}
                      className={`text-stone-700 dark:text-stone-300 p-2 rounded-lg transition-colors ${selectedElementId === 'warningText' ? 'bg-blue-100 dark:bg-blue-900 ring-2 ring-blue-500' : 'hover:bg-stone-50 dark:hover:bg-stone-700'}`}
                    >
                      {currentQuestion.uiData.warningText}
                    </button>
                    <div className="flex gap-4 mt-4">
                      <button 
                        onClick={() => !isChecking && setSelectedElementId('buttonDecline')}
                        className={`px-6 py-2 rounded-lg font-medium text-stone-600 dark:text-stone-300 border border-stone-300 dark:border-stone-600 transition-colors ${selectedElementId === 'buttonDecline' ? 'bg-blue-100 dark:bg-blue-900 ring-2 ring-blue-500' : 'hover:bg-stone-100 dark:hover:bg-stone-700'}`}
                      >
                        {currentQuestion.uiData.buttonDecline || 'Anuluj'}
                      </button>
                      <button 
                        onClick={() => !isChecking && setSelectedElementId('buttonAccept')}
                        className={`px-6 py-2 rounded-lg font-medium text-white transition-colors ${selectedElementId === 'buttonAccept' ? 'bg-blue-600 ring-4 ring-blue-200 dark:ring-blue-900' : 'bg-rose-600 hover:bg-rose-700'}`}
                      >
                        {currentQuestion.uiData.buttonAccept || 'Zezwól'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
    }
  };

  let showBottomBar = false;
  let bottomBarContent = null;
  let bottomBarBg = 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800';

  if (currentQuestion.type === 'info') {
    showBottomBar = true;
    bottomBarContent = (
      <button onClick={handleInfoContinue} className="w-full py-4 rounded-2xl text-2xl font-bold text-white bg-blue-500 hover:bg-blue-600 shadow-sm transition-transform active:scale-95">
        Zrozumiałem
      </button>
    );
  } else if (currentQuestion.type === 'match') {
    const isAllMatched = matchedPairs.length === currentQuestion.pairs.length;
    if (isAllMatched) {
      showBottomBar = true;
      bottomBarBg = 'bg-emerald-100 dark:bg-emerald-900 border-emerald-200 dark:border-emerald-800';
      bottomBarContent = (
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-emerald-500 text-white">
              <Check className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">Świetnie!</h3>
              <p className="text-lg mt-1 text-emerald-800 dark:text-emerald-300">{currentQuestion.explanation}</p>
            </div>
          </div>
          <button onClick={() => handleContinue(true)} className="w-full py-4 rounded-2xl text-2xl font-bold text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm transition-transform active:scale-95">
            Dalej
          </button>
        </div>
      );
    }
  } else {
    const hasSelection = 
      (currentQuestion.type === 'multiple_choice' && selectedOption !== null) ||
      (currentQuestion.type === 'fill_blank' && selectedWord !== null) ||
      (currentQuestion.type === 'scenario' && selectedScenarioOption !== null) ||
      (currentQuestion.type === 'click_element' && selectedElementId !== null) ||
      (currentQuestion.type === 'order' && orderedItems.length === currentQuestion.items.length) ||
      (currentQuestion.type === 'true_false' && selectedBoolean !== null) ||
      (currentQuestion.type === 'visual_choice' && selectedVisualOption !== null);
      
    if (hasSelection) {
      showBottomBar = true;
      if (isChecking) {
        bottomBarBg = isCorrect ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-200 dark:border-emerald-800' : 'bg-rose-100 dark:bg-rose-900 border-rose-200 dark:border-rose-800';
      }
      bottomBarContent = (
        <div className="flex flex-col gap-4">
          {isChecking && (
            <div className="flex items-start gap-4">
              <div className={`p-2 rounded-full ${isCorrect ? 'bg-emerald-500' : 'bg-rose-500'} text-white`}>
                {isCorrect ? <Check className="w-8 h-8" /> : <X className="w-8 h-8" />}
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>
                  {isCorrect ? 'Świetnie!' : 'Nie do końca...'}
                </h3>
                {!isCorrect && (currentQuestion.type === 'multiple_choice' || currentQuestion.type === 'fill_blank' || currentQuestion.type === 'order' || currentQuestion.type === 'true_false' || currentQuestion.type === 'text_input') && (
                  <p className="text-lg mt-1 font-bold text-rose-900 dark:text-rose-300">
                    Poprawna odpowiedź: {getCorrectAnswerText()}
                  </p>
                )}
                <p className={`text-lg mt-1 ${isCorrect ? 'text-emerald-800 dark:text-emerald-300' : 'text-rose-800 dark:text-rose-300'}`}>
                  {currentQuestion.type === 'scenario' && selectedScenarioOption
                    ? currentQuestion.options.find(o => o.id === selectedScenarioOption)?.feedback || currentQuestion.explanation
                    : currentQuestion.type === 'visual_choice' && selectedVisualOption
                    ? currentQuestion.options.find(o => o.id === selectedVisualOption)?.feedback || currentQuestion.explanation
                    : currentQuestion.type === 'click_element' && selectedElementId
                    ? currentQuestion.elementsFeedback[selectedElementId] || currentQuestion.explanation
                    : currentQuestion.explanation}
                </p>
              </div>
            </div>
          )}
          <button
            onClick={isChecking ? () => handleContinue(isCorrect!) : handleCheck}
            className={`w-full py-4 rounded-2xl text-2xl font-bold text-white shadow-sm transition-transform active:scale-95 ${
              isChecking
                ? isCorrect
                  ? 'bg-emerald-500 hover:bg-emerald-600'
                  : 'bg-rose-500 hover:bg-rose-600'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isChecking ? 'Dalej' : 'Sprawdź'}
          </button>
        </div>
      );
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 bg-white dark:bg-stone-900 z-50 flex flex-col transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      {/* Top Bar - Progress */}
      <motion.div 
        className="w-full max-w-2xl mx-auto p-4 flex items-center gap-4 bg-white dark:bg-stone-900 shadow-sm transition-colors duration-300"
        layoutId="top-bar"
      >
        <button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors">
          <ArrowLeft className="w-8 h-8" />
        </button>
        <div className="flex-1 h-4 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={settings.reduceMotion ? { duration: 0 } : { type: 'spring', bounce: 0 }}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 pb-48 flex flex-col items-center max-w-2xl mx-auto w-full">
        <Mascot mood={mascotMood} className="mb-8 mt-4" />
        {renderQuestionContent()}
      </div>

      {/* Bottom Action Bar */}
      <AnimatePresence>
        {showBottomBar && (
          <motion.div 
            className={`fixed bottom-0 left-0 right-0 p-4 border-t-2 ${bottomBarBg} transition-colors duration-300`}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={settings.reduceMotion ? { duration: 0 } : { type: 'spring', bounce: 0, duration: 0.4 }}
          >
            <div className="max-w-2xl mx-auto">
              {bottomBarContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
