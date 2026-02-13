
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import '../styles/global.scss'
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});


export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href={''}></link>
        <head>
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=G-0SHRDQ0X4E`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-0SHRDQ0X4E');
              `,
              }}
            />
          </>
        </head>
      </Head>
      <main className={oswald.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
