// ** React Imports
import { ReactNode } from 'react';

// ** MUI Components
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout';

// ** Demo Imports
import FooterIllustrations from 'src/views/pages/misc/FooterIllustrations';

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
}));

const TreeIllustration = styled('img')(({ theme }) => ({
  left: 0,
  bottom: '5rem',
  position: 'absolute',
  [theme.breakpoints.down('lg')]: {
    bottom: 0,
  },
}));

const Error500 = () => {
  return (
    <Box className="content-center">
      <Box
        sx={{
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <BoxWrapper>
          <Typography variant="h1">500</Typography>
          <Typography
            variant="h5"
            sx={{ mb: 1, fontSize: '1.5rem !important' }}
          >
            Internal server error 👨🏻‍💻
          </Typography>
          <Typography variant="body2">Oops, something went wrong!</Typography>
        </BoxWrapper>
      </Box>
      <FooterIllustrations
        image={<TreeIllustration alt="tree" src="/images/pages/tree-3.png" />}
      />
    </Box>
  );
};

Error500.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Error500;
