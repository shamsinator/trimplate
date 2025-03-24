let audioContext: AudioContext | null = null;
let audioBuffer: AudioBuffer | null = null;

// Initialize audio on first user interaction
export const initSound = async () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
  }

  if (!audioBuffer) {
    try {
      const response = await fetch(
        "https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3",
      );
      const arrayBuffer = await response.arrayBuffer();
      audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      console.log("Sound preloaded successfully");
    } catch (error) {
      console.error("Error loading sound:", error);
    }
  }

  // Resume AudioContext on first interaction (if needed)
  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }
};

export const playClickSound = async () => {
  if (!audioContext || !audioBuffer) {
    await initSound();
    if (!audioContext || !audioBuffer) {
      console.warn("Could not initialize sound");
      return;
    }
  }

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  const gainNode = audioContext.createGain();
  gainNode.gain.value = 0.2; // Set volume to 20%
  source.connect(gainNode);
  gainNode.connect(audioContext.destination);
  source.start(0);
};
