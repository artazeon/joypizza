import { IUseMedia } from 'src/hooks/useMedia/types';

export const Breakpoints = {
  default: 0,
  xs: 600,
  sm: 990,
  md: 1300,
  lg: 1600,
  xl: 1920,
} as const;

export const useMediaDefaultData: IUseMedia = {
  mediaName: 'default',
  mediaSize: 0,
  windowSize: 0,
  isMobile: false,
};
