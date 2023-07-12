import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Utterances from "./Utterances";

const name = "Choisiz";

export default function Layout({ children, home }) {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark"
        ? "dark"
        : "light"
      : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [theme]);

  const handleClick = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  return (
    <div className="bg-pink-50 dark:bg-black text-gray-800 dark:text-gray-200 h-screen">
      <div className={styles.container}>
        <button className="w-12 px-2" onClick={handleClick}>
          {theme === "dark" ? (
            <img src="/images/sunmode.svg" alt="light" />
          ) : (
            <img src="/images/darkmode.svg" alt="dark" />
          )}
        </button>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/kcw.png"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/kcw2.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <>
            <Utterances />
            <div className={styles.backToHome}>
              <Link href="/">← Back to home</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
