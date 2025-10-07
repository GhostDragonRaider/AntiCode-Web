import type { AppProps } from "next/app";
import "../styles/globals.scss";
import NavBar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
