// ** React Imports
import React, {useEffect, useState} from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import Select, {SelectChangeEvent} from '@mui/material/Select'

// ** Third Party Imports
// import DatePicker from 'react-datepicker'

// ** Icons Imports

// ** Services Imports
import {getListBank} from "../../../service/modules/master/Bank";
import {getListFoundation} from "../../../service/modules/master/Foundation";
import {getListBranch} from "../../../service/modules/master/Branch";

// ** CCS Imports
import styles from "./Upload.module.css";

// ** Interfaces Imports
import BankList from "../../../interfaces/master/Bank";
import BranchList from "../../../interfaces/master/Branch";
import FoundationList from "../../../interfaces/master/Foundation";
import {useRecoilState} from "recoil";
import {
  branchSearchState, statusBtnSearchState
} from "../../../store/recoil/atoms/uploadFileBankTransfer";
import AccountBankList, {dataPostAccountBankListSearch} from "../../../interfaces/master/AccountBank";
import {getListAccountBank} from "../../../service/modules/master/AccountBank";
import {bankSearchState} from "../../../store/recoil/atoms/bank";
import {accountBankSearchState} from "../../../store/recoil/atoms/accountBank";
import AutocompleteFoundation from "../../../components/atoms/AutocompleteFoundation";
import AutocompleteBranch from "../../../components/atoms/AutocompleteBranch";
import AutocompleteBank from "../../../components/atoms/AutocompleteBank";
import AutocompleteAccountBank from "../../../components/atoms/AutocompleteAccountBank";

// const CustomInput = forwardRef((props, ref) => {
//   return <TextField fullWidth {...props} inputRef={ref} label='Upload Date' autoComplete='off'/>
// })

const FormLayoutSearchUpload = () => {
  // ** State
  const [listBranch, setBranchList] = useState<BranchList[]>([]);
  const [foundationList, setFoundationList] = useState<FoundationList[]>([]);
  const [listBank, setListBank] = useState<BankList[]>([]);
  const [listAccountBank, setListAccountBank] = useState<AccountBankList[]>([]);
  const [branchSearch, setBranchSearch] = useRecoilState(branchSearchState);
  const [bankSearch, setBankSearch] = useRecoilState(bankSearchState);
  const [accountBankSearch, setAccountBankSearch] = useRecoilState(accountBankSearchState);
  const [statusBtnSearch, setStatusBtnSearch] = useRecoilState(statusBtnSearchState);

  // const [dateRange, setDateRange] = useState([null, null]);
  // const [startDate, endDate] = dateRange;

  // get data list branch
  const selectListBranch = async () => {
    const response = await getListBranch();
    if (response.status == 200) {
      setBranchList(response.data);
    }
  };

  // get data list foundation
  const selectListFoundation = async () => {
    const response = await getListFoundation();
    if (response.status == 200) {
      setFoundationList(response.data);
    }
  };

  // get data list bank
  const selectListBank = async () => {
    const response = await getListBank();
    if (response.status == 200) {
      setListBank(response.data);
    }
  };

  // get data list account bank
  const selectListAccountBank = async (AccountBankListSearch: string) => {
    const response = await getListAccountBank(AccountBankListSearch);
    await console.log("selectListAccountBank", Date().toLocaleString());
    if (response.status == 200) {
      // @ts-ignore
      setListAccountBank(response.data);
    }
  };

  // Handle Select Branch
  const handleSelectBranchSearchChange = async (event: SelectChangeEvent<string[]>) => {
    // @ts-ignore
    setBranchSearch(event.target.value.toString());
  }

  // Handle Select Bank
  const handleSelectBankSearchChange = async (event: SelectChangeEvent<string[]>) => {
    setBankSearch(event.target.value.toString());
  }

  // Handle Select Account Bank
  const handleSelectAccountBankSearchChange = async (event: SelectChangeEvent<string[]>) => {
    // @ts-ignore
    setAccountBankSearch(event.target.value.toString());
  }

  // Handle Select Account Bank
  const handleBtnSearchCkick = async () => {
    setStatusBtnSearch(true);
  }

  useEffect(() => {
    selectListBank()
    selectListFoundation()
    selectListBranch()
    if (bankSearch) {
      selectListAccountBank(bankSearch)
    }
  }, [bankSearch]);

  // @ts-ignore
  return (
    <form onSubmit={e => e.preventDefault()}>
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <AutocompleteFoundation />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutocompleteBranch />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutocompleteBank />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutocompleteAccountBank />
          </Grid>
        </Grid>
      </CardContent>
      <Divider sx={{margin: 0}}/>
      <CardActions className={styles.parentFlexRight}>
        <Button className="btn-search" onClick={handleBtnSearchCkick} size='large' type='submit' sx={{mr: 2}} variant='contained'>
          Search...
        </Button>
      </CardActions>
    </form>
  );
};

export default FormLayoutSearchUpload;
