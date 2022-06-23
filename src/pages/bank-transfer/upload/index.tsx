// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import FormLayoutSearchUpload from "../../../views/BankTransfer/Upload/FormLayoutSearchUpload";
import TableLayoutUpload from "../../../views/BankTransfer/Upload/TableLayoutUpload";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import React, {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from "@mui/material/styles";
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import {Add} from "@mui/icons-material";
import { Modal} from "@mui/material";
import ModalAddNewFileUpload from "../../../views/BankTransfer/Upload/ModalAddNewFileUpload";
import {routeValidate} from "../../../service/auth/routeValidate";
import {useRecoilState} from "recoil";
import {modalState} from "../../../store/recoil/atoms/global";
import AutocompleteFoundation from "../../../components/atoms/AutocompleteFoundation";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {expand, ...other} = props;

  return <IconButton {...other} />;
})(({theme, expand}) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Upload = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // useEffect(() => {
  //   // routeValidate(false)
  // }, []);

  return (
    <DatePickerWrapper>
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Upload File Mutasi Bank' titleTypographyProps={{variant: 'h6'}} action={
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <Button variant='outlined' color='primary' onClick={handleOpen} startIcon={<Add/>} size='medium'>Add
                    New</Button>
                </Grid>
                <Grid item xs={1}>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon color="danger"/>
                  </ExpandMore>
                </Grid>
              </Grid>
            }/>
            <Divider sx={{margin: 0}}/>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <FormLayoutSearchUpload/>
            </Collapse>
            <br/>
            <TableLayoutUpload/>
          </Card>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalAddNewFileUpload />
      </Modal>
    </DatePickerWrapper>
  );
};

export default Upload;
