export const easeInOutExpo = [0.87, 0, 0.13, 1]; // Smooth acceleration & deceleration
export const easeOutBack = [0.34, 1.56, 0.64, 1]; // Slight overshoot effect

export const pageVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeInOutExpo },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: { duration: 0.4, ease: easeOutBack },
  },
};
