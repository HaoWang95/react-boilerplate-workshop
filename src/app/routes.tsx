import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import DashboardDefault from './pages/Dashboard/DashboardDefault';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dashboard from './layout/Dashboard';

/**
 * The Routes component will contain and list all available routes in the app.
 * @returns Routes Component
 */
export default function Routes() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        {/* index path is eager-loading */}
        <Route exact path="/" component={HomePage} />
        {/* Not found is lazy-loading by default */}

        <Route
          path={'/dashboard'}
          render={({ match: { path } }) => (
            <Dashboard>
              <Switch>
                <Route exact path={path + '/'} component={DashboardDefault} />
              </Switch>
            </Dashboard>
          )}
        />
        <Route
          path="/about"
          component={lazy(() => import('./pages/AboutPage/AboutPage'))}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}
