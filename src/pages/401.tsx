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

const Error401 = () => {
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
          <Typography variant="h1">401</Typography>
          <Typography
            variant="h5"
            sx={{ mb: 1, fontSize: '1.5rem !important' }}
          >
            You are not authorized! 🔐
          </Typography>
          <Typography variant="body2">
            You don&prime;t have permission to access this page. Go Home!
          </Typography>
        </BoxWrapper>
      </Box>
      <FooterIllustrations />
    </Box>
  );
};

Error401.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Error401;
