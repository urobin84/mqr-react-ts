import { useContext } from 'react';
import {
  SettingsContext,
  SettingsContextValue,
} from '../context/settingContext';

export const useSettings = (): SettingsContextValue =>
  useContext(SettingsContext);
