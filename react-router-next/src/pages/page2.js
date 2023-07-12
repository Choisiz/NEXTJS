import Link from "next/link";
import Layout from "../components/Layout";

export default function PageTwo() {
  return (
    <Layout>
      <p>page2</p>
      <Link href="/" legacyBehavior>
        <p className="App-link">Previous Page</p>
      </Link>
    </Layout>
  );
}
