export const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition: {
      duration: 0.9,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh",
  },
  exit: {
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.76, 0, 0.24, 1], //easeInOutQuart
    },
  },
};

export const opacity = {
  initial: {
    opacity: 0.2,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.61, 1, 0.88, 1], //easeOutSine
    },
  },
  exit: {
    opacity: 1,
  },
};
