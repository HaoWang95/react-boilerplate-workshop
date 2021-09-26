import { Grid } from '@material-ui/core';
import * as React from 'react';
import NavigationSideBar from './navigation/NavigationSideBar';

// This is how to pass components as props
type Props = {
  children: React.ReactNode;
};

export default function Dashboard({ children }: Props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <NavigationSideBar />
      {children}
    </Grid>
  );
}
