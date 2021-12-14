import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
