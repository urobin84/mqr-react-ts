import React, {useEffect, useState} from 'react';
import {Autocomplete, CircularProgress} from "@mui/material";
import TextField from "@mui/material/TextField";
import BranchList from "../../../interfaces/master/Branch";
import {getListBranch} from "../../../service/modules/master/Branch";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const AutocompleteBranch = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly BranchList[]>([]);
  const loading = open && options.length === 0;
  const [branchList, setBranchList] = useState<BranchList[]>([]);

  // get data list foundation
  const selectListBranch = async () => {
    const response = await getListBranch();
    if (response.status == 200) {
      setBranchList(response.data);
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
        setOptions([...branchList]);
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
    selectListBranch();
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
      isOptionEqualToValue={(option, value) => option.nama === value.nama}
      getOptionLabel={(option) => option.nama}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Branch"
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

export default AutocompleteBranch;
