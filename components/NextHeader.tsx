import Head from "next/head";

import React from "react";

function NextHeader() {
  return (
    <Head>
      <title>Shortly</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,500&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/favicon-32x32.png" type="image/x-icon"/>
    </Head>
  );
}

export default NextHeader;
