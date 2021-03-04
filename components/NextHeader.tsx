import Head from "next/head";

import React from "react";

function NextHeader() {
  return (
    <Head>
      <title>Shortly</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

export default NextHeader;
