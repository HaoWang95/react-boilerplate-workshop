import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import DefaultButton from 'app/components/Button/DefaultButton';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <h1>Home page</h1>
      <div style={{ textAlign: 'center' }}>
        <DefaultButton />
      </div>
    </>
  );
}
