// ** React Imports
import { Fragment, ReactNode } from 'react';

// ** MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface FooterIllustrationsProp {
  image?: ReactNode;
}

const FooterIllustrations = (props: FooterIllustrationsProp) => {
  // ** Props
  const {} = props;

  // ** Hook
  const theme = useTheme();

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'));

  if (!hidden) {
    return <Fragment></Fragment>;
  } else {
    return null;
  }
};

export default FooterIllustrations;
