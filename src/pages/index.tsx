import {Card, CardContent, Grid} from '@mui/material';
import React, {useEffect} from 'react';

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import {routeValidate} from "../service/auth/routeValidate";

const Dashboard = () => {
  // useEffect(() => {
  //   // routeValidate(true)
  // } , []);

  return (
    <ApexChartWrapper>
      <Grid>
        <Card>
          <CardContent sx={{minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className="center">
              <h4>Mohon Maaf</h4>
              <p>Halaman Dashboard Sedang Dalam perbaikan.</p>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </ApexChartWrapper>
  );
};

export default Dashboard;
