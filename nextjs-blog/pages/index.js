import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export async function getServerSideProps() {
  //ssr
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
  };
}
export default function Home({ time }) {
  return (
    <>
      <main>
        <h1 className="title">{time}ssr</h1>
        <h1>
          <Link href="/csr">csr로 이동</Link>
        </h1>
        <h1>
          <Link href="/ssg">ssg로 이동</Link>
        </h1>
        <h1>
          <Link href="/isr">isr로 이동</Link>
        </h1>
      </main>
    </>
  );
}
