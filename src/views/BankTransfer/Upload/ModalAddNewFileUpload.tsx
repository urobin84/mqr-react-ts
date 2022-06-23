import React from 'react';
import { CardContent, Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import {WindowClose} from "mdi-material-ui";
import { useRecoilState} from "recoil";
import {modalState} from "../../../store/recoil/atoms/global";
import IconButton from "@mui/material/IconButton";
import AutocompleteFoundation from "../../../components/atoms/AutocompleteFoundation";
import AutocompleteBranch from "../../../components/atoms/AutocompleteBranch";
import AutocompleteBank from "../../../components/atoms/AutocompleteBank";
import AutocompleteAccountBank from "../../../components/atoms/AutocompleteAccountBank";
import DropzoneFile from "../../../components/atoms/DropzoneFile";
import CardActions from "@mui/material/CardActions";
import styles from "./Upload.module.css";

const ModalAddNewFileUpload = () => {
  const [openModal, setOpenModal] = useRecoilState(modalState);
  const [statusBtnUpload, setStatusBtnUpload] = useRecoilState(modalState);
  const handleClose = () => setOpenModal(false);

  // Handle Select Account Bank
  const handleBtnUploadCkick = async () => {
    setStatusBtnUpload(true);
  }

  // Handle Select Account Bank
  const handleBtnResetCkick = async () => {
    setStatusBtnUpload(true);
  }

  return (
    <Container maxWidth="md" >
      <Grid container spacing={2} display={'flex'} justifyContent={'center'} paddingTop={20} height="100vh">
        <Grid item xs={12}>
          <Card >
            <CardHeader title='Add New File Upload   ' titleTypographyProps={{variant: 'h6'}} action={
              <div>
                <IconButton color="primary" onClick={handleClose} aria-label="" component="span" size='medium'>
                  <WindowClose/>
                </IconButton>
              </div>
            }
            />
            <CardContent>
              <form onSubmit={e => e.preventDefault()}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <AutocompleteFoundation/>
                  </Grid>
                  <Grid item xs={12}>
                    <AutocompleteBranch/>
                  </Grid>
                  <Grid item xs={12}>
                    <AutocompleteBank/>
                  </Grid>
                  <Grid item xs={12}>
                    <AutocompleteAccountBank/>
                  </Grid>
                  <Grid item xs={12}>
                    <DropzoneFile/>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
            <CardActions className={styles.parentFlexRight}>
              <Button className="btn-reset" onClick={handleBtnResetCkick} size='large' type='submit' sx={{mr: 2}} variant='outlined'>
                Reset
              </Button>
              <Button className="btn-search" onClick={handleBtnUploadCkick} size='large' type='submit' sx={{mr: 2}} variant='contained'>
                Upload
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ModalAddNewFileUpload;
