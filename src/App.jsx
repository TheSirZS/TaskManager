import React from 'react';

import { AppRouter } from './routers/app.router';

export const App = () => {
  return (
    <div className={"bg-dark"}>
      <AppRouter />
    </div>
  );
}
