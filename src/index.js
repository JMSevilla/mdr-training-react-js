import React from 'react';
import ReactDOM from 'react-dom/client';

import ApplicationHelper from './router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApplicationHelper />
  </React.StrictMode>
);