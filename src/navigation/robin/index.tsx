// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline';
import BallotRecount from 'mdi-material-ui/BallotRecount';
import BankTransfer from 'mdi-material-ui/BankTransfer';
import BankTransferIn from 'mdi-material-ui/BankTransferIn';
import Upload from 'mdi-material-ui/Upload';

// ** Type import
import { RobinNavItemsType } from 'src/@core/layouts/types';

const navigation = (): RobinNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/',
    },
    {
      sectionTitle: 'Mutasi Bank',
    },
    {
      title: 'Upload',
      icon: Upload,
      path: '/bank-transfer/upload',
    },
    {
      title: 'Mutasi Rekening',
      icon: BankTransfer,
      path: '/bank-transfer/mutasi',
    },
    {
      title: 'Mutasi Rekon',
      icon: BallotRecount,
      path: '/bank-transfer/mutasi',
    },
    {
      title: 'Mutasi Non ID Rekening',
      icon: BankTransferIn,
      path: '/bank-transfer/mutasi',
    },
  ];
};

export default navigation;
