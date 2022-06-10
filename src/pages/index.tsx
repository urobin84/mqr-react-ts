import {
  AppBar,
  Badge,
  Box,
  Container, createTheme,
  CssBaseline, Divider,
  Grid,
  IconButton,
  List,
  Paper,
  ThemeProvider, Toolbar,
  Typography
} from "@mui/material";
import React from "react";

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'


const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={12}>
        <div className='center'>
          <h4>Mohon Maaf</h4>
          <p>Halaman Dashboard Sedang Dalam perbaikan.</p>
        </div>
      </Grid>
    </ApexChartWrapper>
  );
}

export default Dashboard
