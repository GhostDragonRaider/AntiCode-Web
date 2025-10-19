import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import "../styles/Calendar.scss";
import "../styles/UnderConstruction.scss";
import "../styles/MenuSystem.scss";
import NavBar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isProjectPage = router.pathname.startsWith("/projects/");

  return (
    <div className={isProjectPage ? "project-page" : ""}>
      {!isProjectPage && <NavBar />}
      <Component {...pageProps} />
    </div>
  );
}
