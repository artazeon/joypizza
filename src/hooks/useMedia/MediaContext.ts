import { createContext } from 'react';
import { useMediaDefaultData } from 'src/constants/constants';
import { IUseMedia } from './types';

export const MediaContext = createContext<IUseMedia>(useMediaDefaultData);
