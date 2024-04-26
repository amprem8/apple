import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx';
import './index.css';

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://66b4287ff242010e7f2f9e12e79d2070@o4507118210646016.ingest.us.sentry.io/4507118222508032",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("root");

  if (!container) {
    throw new Error("Container element not found!");
  }

  // Use ReactDOM.createRoot for React 18 and above
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
