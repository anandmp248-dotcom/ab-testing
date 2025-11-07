
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";

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
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `,
              }}
            />
          </>
        </head>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
