import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <div className='bg-black h-screen overflow-hidden'>
      <body>
          <Main />
        <NextScript />
      </body>
      </div>
    </Html>
  )
}

