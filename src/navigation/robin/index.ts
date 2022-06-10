// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

// ** Type import
import { RobinNavItemsType } from 'src/@core/layouts/types'
import {BallotRecount, BankTransfer, BankTransferIn, Upload} from "mdi-material-ui";

const navigation = (): RobinNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Mutasi Bank'
    },
    {
      title: 'Upload',
      icon: Upload,
      path: '/mutasi-bank/upload'
    },
    {
      title: 'Mutasi Rekening',
      icon: BankTransfer,
      path: '/mutasi-bank/mutasi'
    },
    {
      title: 'Mutasi Rekon',
      icon: BallotRecount,
      path: '/mutasi-bank/mutasi'
    },
    {
      title: 'Mutasi Non ID Rekening',
      icon: BankTransferIn,
      path: '/mutasi-bank/mutasi'
    }
  ]
}

export default navigation
