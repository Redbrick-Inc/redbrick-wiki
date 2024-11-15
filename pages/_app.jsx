import { GoogleTagManager } from '@next/third-parties/google';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager id="GTM-5DN25W3Z" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;