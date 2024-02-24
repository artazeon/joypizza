export interface IUseMedia {
  mediaName: string;
  mediaSize: number;
  windowSize: number;
  isMobile: boolean;
}

export interface IBreakpoints {
  [key: string]: [number, number];
}
