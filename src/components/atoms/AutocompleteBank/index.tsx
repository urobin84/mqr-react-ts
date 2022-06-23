import React, {useEffect, useState} from 'react';
import {Autocomplete, CircularProgress} from "@mui/material";
import TextField from "@mui/material/TextField";
import BankList from "../../../interfaces/master/Bank";
import {getListBank} from "../../../service/modules/master/Bank";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const AutocompleteBank = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly BankList[]>([]);
  const loading = open && options.length === 0;
  const [bankList, setBankList] = useState<BankList[]>([]);

  // get data list foundation
  const selectListBank = async () => {
    const response = await getListBank();
    if (response.status == 200) {
      setBankList(response.data);
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
        setOptions([...bankList]);
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
    selectListBank();
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
      isOptionEqualToValue={(option, value) => option.bank === value.bank}
      getOptionLabel={(option) => option.bank}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Bank"
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

export default AutocompleteBank;
