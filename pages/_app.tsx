// @ts-expect-error: Next.js handles global CSS imports at build time.
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Script from 'next/script';

type ThemeProviderProps = {
  children: ReactNode;
  attribute?: string;
  enableSystem?: boolean;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ofw9kaxip7");`}
      </Script>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
