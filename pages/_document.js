
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`;
  return (
    <Html lang="en">
      <Head >
      <script async src={gtag} />
          <script 
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
     
      </Head>
      <body style={{background:"#E8E8E8",height:"100vh - 6rem"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}