 
import "../styles/index.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID ?? "";
const DARK_MODE_ENABLED = process.env.NEXT_PUBLIC_DARK_MODE;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
