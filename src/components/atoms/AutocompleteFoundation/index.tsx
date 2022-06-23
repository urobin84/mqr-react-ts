import React, {useEffect, useState} from 'react';
import FoundationList from "../../../interfaces/master/Foundation";
import {getListFoundation} from "../../../service/modules/master/Foundation";
import {Autocomplete, CircularProgress} from "@mui/material";
import TextField from "@mui/material/TextField";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const AutocompleteFoundation = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly FoundationList[]>([]);
  const loading = open && options.length === 0;
  const [foundationList, setFoundationList] = useState<FoundationList[]>([]);

  // get data list foundation
  const selectListFoundation = async () => {
    const response = await getListFoundation();
    if (response.status == 200) {
      setFoundationList(response.data);
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
        setOptions([...foundationList]);
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
    selectListFoundation();
  }, []);

  return (
    <Autocomplete
      id="autocomplete-foundation"
     fullWidth={true}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Foundation"
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

export default AutocompleteFoundation;
