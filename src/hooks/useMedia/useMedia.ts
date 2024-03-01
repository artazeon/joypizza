import { useContext } from 'react';
import { IUseMedia } from './types';
import { MediaContext } from './MediaContext';

export const useMedia = (): IUseMedia => useContext(MediaContext);
