import { IUseMedia } from './types';
import { breakpoints } from 'src/constants/constants';

const isMobileDevice = (): boolean =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent,
  )
    ? true
    : false;

const getWindowSize = (): number => window.innerWidth;

const getBreakpointsData = (
  windowSize: number,
): { mediaName: string; mediaSize: number } => {
  let mediaName: string = '';
  let mediaSize: number = 0;

  for (const key in breakpoints) {
    const range: number[] = breakpoints[key];
    const rangeMin: number = range[0];
    const rangeMax: number = range[1];

    if (windowSize >= rangeMin && windowSize <= rangeMax) {
      mediaName = key;
      mediaSize = rangeMin;
    }
  }

  return { mediaName, mediaSize };
};

export const useMedia = (): IUseMedia => {
  const windowSize: number = getWindowSize();
  const isMobile: boolean = isMobileDevice();
  const { mediaName, mediaSize } = getBreakpointsData(windowSize);

  return { mediaName, mediaSize, windowSize, isMobile };
};
