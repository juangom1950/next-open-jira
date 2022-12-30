import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - Open Jira">
      <Grid container spacing={2}>
        {/* 12 = 1 Column, 4 = 3 Columns */}
        <Grid item xs={12} sm={4}>
          {/* This is the style that has access to the Themes */}
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientess" />
            <CardContent>
              {/* Agregar una nueva entrada */}
              {/* Listado de las endtradas s*/}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completadas" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
