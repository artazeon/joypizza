import { Breakpoints } from 'src/constants/constants';

export type IBreakpointsName = keyof typeof Breakpoints;

export type IBreakpointsValue = (typeof Breakpoints)[keyof typeof Breakpoints];

export interface IUseMedia {
  mediaName: IBreakpointsName;
  mediaSize: IBreakpointsValue;
  windowSize: number;
  isMobile: boolean;
}
