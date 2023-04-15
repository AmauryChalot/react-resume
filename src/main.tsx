import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextsProviders } from './context';
import './index.css';
import App from './modules/App/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextsProviders>
      <App />
    </ContextsProviders>
  </React.StrictMode>,
);
