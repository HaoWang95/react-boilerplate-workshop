import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

/**
 * The Routes component will contain and list all available routes in the app.
 * @returns Routes Component
 */
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
