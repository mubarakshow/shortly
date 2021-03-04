import React, {ComponentType} from "react";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
