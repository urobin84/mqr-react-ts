// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import FormLayoutSearchUpload from "../../../views/mutasi-bank/upload/FormLayoutSearchUpload";
import TableLayoutUpload from "../../../views/mutasi-bank/upload/TableLayoutUpload";

const Upload = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FormLayoutSearchUpload/>
        </Grid>
        <Grid item xs={12}>
          <TableLayoutUpload/>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  );
};

export default Upload;
