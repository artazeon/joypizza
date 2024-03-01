import { IBreakpoints, IUseMedia } from 'src/hooks/useMedia/types';

export const breakpoints: IBreakpoints = {
  default: [0, 599],
  xs: [600, 889],
  sm: [990, 1299],
  md: [1300, 1599],
  lg: [1600, 1919],
  xl: [1920, Infinity],
};

export const useMediaDefaultData: IUseMedia = {
  mediaName: 'default',
  mediaSize: 0,
  windowSize: 0,
  isMobile: false,
};
