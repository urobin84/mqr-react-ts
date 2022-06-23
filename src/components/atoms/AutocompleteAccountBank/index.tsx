import React, {useEffect, useState} from 'react';
import {Autocomplete, CircularProgress} from "@mui/material";
import TextField from "@mui/material/TextField";
import AccountBankList from "../../../interfaces/master/AccountBank";
import {getListAccountBank} from "../../../service/modules/master/AccountBank";
import {useRecoilState} from "recoil";
import {bankSearchState} from "../../../store/recoil/atoms/bank";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const AutocompleteAccountBank = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly AccountBankList[]>([]);
  const loading = open && options.length === 0;
  const [bankSearch, setBankSearch] = useRecoilState(bankSearchState)
  const [accountBankList, setAccountBankList] = useState<AccountBankList[]>([]);

  // get data list foundation
  const selectListAccountBank = async () => {
    const response = await getListAccountBank(bankSearch);
    if (response.status == 200) {
      setAccountBankList(response.data);
    }
  };

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...accountBankList]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    selectListAccountBank();
  }, []);

  return (
    <Autocomplete
      id="autocomplete-branch"
     fullWidth={true}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.accountBank === value.accountBank}
      getOptionLabel={(option) => option.accountBank}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Account Bank"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default AutocompleteAccountBank;
