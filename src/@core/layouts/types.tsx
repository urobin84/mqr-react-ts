import {ReactElement, ReactNode} from 'react';
import { Settings } from '../context/settingContext';

export type ContentWidth = 'full' | 'boxed';

export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

export type NavLink = {
  path?: string;
  title: string;
  action?: string;
  subject?: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  icon?: any;
  badgeColor?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info';
};

export type NavSectionTitle = {
  sectionTitle: string;
  action?: string;
  subject?: string;
};

export type RobinNavItemsType = (NavLink | NavSectionTitle)[];

export type LayoutProps = {
  hidden: boolean;
  settings: Settings;
  children: ReactNode;
  robinNavItems?: RobinNavItemsType;
  scrollToTop?: (props?: any) => ReactNode;
  saveSettings: (values: Settings) => void;
  footerContent?: (props?: any) => ReactNode;
  robinAppBarContent?: (props?: any) => ReactNode;
  robinNavMenuContent?: (props?: any) => ReactNode;
  robinNavMenuBranding?: (props?: any) => ReactNode;
  afterRobinNavMenuContent?: (props?: any) => ReactNode;
  beforeRobinNavMenuContent?: (props?: any) => ReactNode;
};

export type BlankLayoutProps = {
  children: ReactNode;
};
