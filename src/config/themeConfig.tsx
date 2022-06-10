import { PaletteMode } from '@mui/material';
import { ContentWidth } from '../@core/layouts/types';

type ThemeConfig = {
  mode: PaletteMode;
  templateName: string;
  routingLoader: boolean;
  disableRipple: boolean;
  navigationSize: number;
  menuTextTruncate: boolean;
  contentWidth: ContentWidth;
  responsiveFontSizes: boolean;
};

const themeConfig: ThemeConfig = {
  // ** Layout Configs
  templateName: 'Finance' /* App Name */,
  mode: 'light' /* light | dark */,
  contentWidth: 'boxed' /* full | boxed*/,

  // ** Routing Configs
  routingLoader: false /* true | false */,

  // ** Navigation (Menu) Configs
  menuTextTruncate: true /* true | false */,
  navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,

  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: true /* true | false */,
};

export default themeConfig;
