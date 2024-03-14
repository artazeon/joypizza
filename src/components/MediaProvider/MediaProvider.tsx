import React, { useEffect, useState } from 'react';
import { IChildren } from '@interfaces/Interfaces';
import { Breakpoints, useMediaDefaultData } from 'src/constants/constants';
import {
  IBreakpointsName,
  IBreakpointsValue,
  IUseMedia,
} from 'src/hooks/useMedia/types';
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
): { mediaName: IBreakpointsName; mediaSize: IBreakpointsValue } => {
  let mediaName: IBreakpointsName = 'default';

  for (const key in Breakpoints) {
    const keyInBreakpoints = key as IBreakpointsName;

    if (windowSize < Breakpoints[keyInBreakpoints]) {
      break;
    }

    mediaName = keyInBreakpoints;
  }

  return { mediaName, mediaSize: Breakpoints[mediaName] };
};

export const MediaProvider = ({ children }: IChildren) => {
  let debounceTimer: ReturnType<typeof setTimeout>;
  const observeElement: Element = document.body;

  const [useMediaState, setUseMediaState] =
    useState<IUseMedia>(useMediaDefaultData);

  const setUseMediaStateHandler = (): void => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      const windowSize: number = getWindowSize();
      const isMobile: boolean = isMobileDevice();
      const { mediaName, mediaSize } = getBreakpointsData(windowSize);

      setUseMediaState({ mediaName, mediaSize, windowSize, isMobile });
    }, 150);
  };

  const resizeObserver = new ResizeObserver(setUseMediaStateHandler);

  useEffect(() => {
    setUseMediaStateHandler();

    resizeObserver.observe(observeElement);

    return () => {
      resizeObserver.unobserve(observeElement);
    };
  }, []);

  return (
    <MediaContext.Provider value={useMediaState}>
      {children}
    </MediaContext.Provider>
  );
};
