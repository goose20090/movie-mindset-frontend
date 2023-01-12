import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import reportWebVitals from "./testing-and-web-vitals/reportWebVitals"
import {BrowserRouter} from "react-router-dom"
import FontStyles from './global-styles-and-fonts/fontStyles';
import { GlobalStyles } from './global-styles-and-fonts/GlobalStyles';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <FontStyles/>
    <ToastContainer/>
    <GlobalStyles/>
    <BrowserRouter>
      <QueryClientProvider client = {queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
