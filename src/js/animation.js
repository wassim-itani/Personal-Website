export const loader = {
  hidden: { scale: 1, opacity: 1 },
  visible: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
};

export const polygon = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

export const letter = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1.5, ease: "easeInOut" },
  },
};

export const logo = {
  hidden: {
    visibility: "hidden",
    opacity: 0,
  },
  visible: {
    visibility: "visible",
    opacity: 1,
    transition: { duration: 0.14, delay: 2.6, ease: "easeOut" },
  },
};

export const menuToggler = {
  hidden: {
    visibility: "hidden",
    opacity: 0,
  },
  visible: {
    visibility: "visible",
    opacity: 1,
    transition: { duration: 0.14, delay: 2.6, ease: "easeOut" },
  },
};

export const navList = {
  hidden: false,
  visible: {
    transition: {
      delayChildren: 2.5,
      staggerChildren: 0.14,
    },
  },
};

export const navItem = {
  hidden: { visibility: "hidden", y: -30, opacity: 0 },
  visible: {
    visibility: "visible",
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.4, ease: "easeOut" },
  },
};

export const heroSection = {
  hidden: { visibility: "hidden", opacity: 0 },
  visible: {
    visibility: "visible",
    opacity: 1,
    transition: {
      delay: 3.46,
      duration: 1,
      ease: "easeOut",
      delayChildren: 3.46,
      staggerChildren: 0.14,
    },
  },
};

export const heroSection2 = {
  hidden: { visibility: "hidden", opacity: 0 },
  visible: {
    visibility: "visible",
    opacity: 1,
    transition: {
      delay: 3,
      duration: 1,
      ease: "easeOut",
      delayChildren: 3,
      staggerChildren: 0.14,
    },
  },
};

export const heroItem = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.4, ease: "easeOut" },
  },
};

export const leftBar = {
  hidden: { visibility: "hidden", opacity: 0 },
  visible: {
    visibility: "visible",
    opacity: 1,
    transition: { delay: 4.42, duration: 0.3, ease: "easeOut" },
  },
};

export const rightBar = {
  hidden: { visibility: "hidden", opacity: 0 },
  visible: {
    visibility: "visible",
    opacity: 1,
    transition: { delay: 4.72, duration: 0.3, ease: "easeOut" },
  },
};

export const section = {
  hidden: { visibility: "hidden", y: 40, opacity: 0 },
  visible: {
    visibility: "visible",
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const portfolioHeading = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const projectItem = {
  hidden: {
    visibility: "hidden",
    y: 40,
    opacity: 0,
  },
  visible: {
    visibility: "visible",
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const tabContent = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeOut",
    },
  },
};
