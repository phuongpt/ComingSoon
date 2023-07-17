import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <AlertProvider template={AlertTemplate} {...options}>
    <Component {...pageProps} />;
  </AlertProvider>
}

export default MyApp;
