import "@/styles/reset.css";
import "@/styles/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import {ToastContainer} from 'react-toastify'
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <ToastContainer />
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
    </ThemeProvider>
  );
}
