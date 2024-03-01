import React, { useEffect, useState } from 'react';
import { IChildren } from '@interfaces/Interfaces';
import { breakpoints, useMediaDefaultData } from 'src/constants/constants';
import { IUseMedia } from 'src/hooks/useMedia/types';
import { MediaContext } from 'src/hooks/useMedia/MediaContext';

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

export const MediaProvider = ({ children }: IChildren) => {
  const [useMediaState, setUseMediaState] =
    useState<IUseMedia>(useMediaDefaultData);

  const setUseMediaStateHandler = (): void => {
    const windowSize: number = getWindowSize();
    const isMobile: boolean = isMobileDevice();
    const { mediaName, mediaSize } = getBreakpointsData(windowSize);

    setUseMediaState({ mediaName, mediaSize, windowSize, isMobile });
  };

  useEffect(() => {
    setUseMediaStateHandler();

    window.addEventListener('resize', setUseMediaStateHandler);

    return () => {
      window.removeEventListener('resize', setUseMediaStateHandler);
    };
  }, []);

  return (
    <MediaContext.Provider value={useMediaState}>
      {children}
    </MediaContext.Provider>
  );
};
