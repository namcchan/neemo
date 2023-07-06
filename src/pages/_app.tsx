import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import theme from '@/themes/theme';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="light"
      attribute="class"
      value={{
        light: theme.className,
        dark: theme.className,
      }}
    >
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
