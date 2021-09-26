/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import Routes from './routes';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="Enterprise React Patterns"
        defaultTitle="React Patterns"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
