import Link from "next/link";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <p>page1</p>
      <Link href="/page2">
        <p className="App-link">Next Page</p>
      </Link>
    </Layout>
  );
}
