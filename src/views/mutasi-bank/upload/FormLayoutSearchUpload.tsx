// ** React Imports
import React, {ChangeEvent, forwardRef, MouseEvent, useEffect, useState} from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select, {SelectChangeEvent} from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';

// ** Icons Imports

// ** Services Imports
import {getListBank} from "../../../service/modules/master/Bank";
import {getListFoundation} from "../../../service/modules/master/Foundation";
import {getListBranch} from "../../../service/modules/master/Branch";

// ** CCS Imports
import styles from "./Upload.module.css";

// ** Interfaces Imports
import BankList from "../../../interfaces/Bank";
import BranchList from "../../../interfaces/Branch";
import FoundationList from "../../../interfaces/Foundation";

const FormLayoutSearchUpload = () => {
  // ** State
  const [listBranch, setBranchList] = useState<BranchList[]>([]);
  const [foundationList, setFoundationList] = useState<FoundationList[]>([]);
  const [listBank, setListBank] = useState<BankList[]>([]);
  const [value, setValue] = useState<DateRange<Date>>([null, null]);

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

  useEffect(() => {
    selectListBank()
    selectListFoundation()
    selectListBranch()
  }, []);

  return (
    <Card>
      <CardHeader title='Upload File Mutasi Bank' titleTypographyProps={{variant: 'h6'}}/>
      <Divider sx={{margin: 0}}/>
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Yayasan</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  {foundationList.map(data => {

                    return (
                      <MenuItem key={data.id} value={data.id}>{data.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Cabang</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  {listBranch.map(data => {

                    return (
                      <MenuItem key={data.id} value={data.id}>{`(${data.kode_cabang}) ${data.nama}`}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Bank</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  {listBank.map(data => {

                    return (
                      <MenuItem key={data.id} value={data.id}>{`(${data.kode_bank}) ${data.bank}`}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Rekening</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  {listBank.map(data => {

                    return (
                      <MenuItem key={data.id} value={data.id}>{`(${data.kode_bank}) ${data.bank}`}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Rekening</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateRangePicker
                    label="Advanced keyboard"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(startProps, endProps) => (
                      <React.Fragment>
                        <input
                          ref={startProps.inputRef as React.Ref<HTMLInputElement>}
                          {...startProps.inputProps}
                        />
                        <Box sx={{ mx: 1 }}> to </Box>
                        <input
                          ref={endProps.inputRef as React.Ref<HTMLInputElement>}
                          {...endProps.inputProps}
                        />
                      </React.Fragment>
                    )}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{margin: 0}}/>
        <CardActions className={styles.parentFlexRight}>
          <Button size='large' type='submit' sx={{mr: 2}} variant='contained'>
            Search...
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default FormLayoutSearchUpload;
