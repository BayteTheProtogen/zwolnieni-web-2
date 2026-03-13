let audioCtx: AudioContext | null = null;

const getAudioContext = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

function playTone(freq: number, type: OscillatorType, duration: number, startTimeOffset: number, volume = 0.1) {
  try {
    const ctx = getAudioContext();
    const startTime = ctx.currentTime + startTimeOffset;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    
    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(startTime);
    osc.stop(startTime + duration);
  } catch (e) {
    console.error("Audio playback failed", e);
  }
}

export const playCorrectSound = () => {
  playTone(523.25, 'sine', 0.15, 0); // C5
  playTone(659.25, 'sine', 0.3, 0.1); // E5
};

export const playIncorrectSound = () => {
  playTone(300, 'triangle', 0.2, 0);
  playTone(250, 'triangle', 0.3, 0.15);
};

export const playCompleteSound = () => {
  playTone(523.25, 'sine', 0.15, 0); // C5
  playTone(659.25, 'sine', 0.15, 0.15); // E5
  playTone(783.99, 'sine', 0.15, 0.3); // G5
  playTone(1046.50, 'sine', 0.5, 0.45); // C6
};

export const playFailSound = () => {
  playTone(349.23, 'triangle', 0.2, 0); // F4
  playTone(329.63, 'triangle', 0.2, 0.2); // E4
  playTone(311.13, 'triangle', 0.2, 0.4); // Eb4
  playTone(293.66, 'triangle', 0.6, 0.6); // D4
};

export const playBadgeSound = () => {
  playTone(880, 'sine', 0.1, 0);
  playTone(1108.73, 'sine', 0.1, 0.1);
  playTone(1318.51, 'sine', 0.4, 0.2);
};

export const playMascotHappySound = () => {
  playTone(400, 'sine', 0.1, 0, 0.05);
  playTone(600, 'sine', 0.2, 0.1, 0.05);
};

export const playMascotSadSound = () => {
  playTone(300, 'triangle', 0.3, 0, 0.05);
  playTone(250, 'triangle', 0.4, 0.2, 0.05);
};

export const playMascotThinkingSound = () => {
  playTone(400, 'sine', 0.1, 0, 0.03);
  playTone(400, 'sine', 0.1, 0.2, 0.03);
};

export const playMascotBoopSound = () => {
  playTone(600, 'sine', 0.15, 0, 0.05);
};
