import Head from "next/head";
import Layout from "../../components/Layout";

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>첫번째 글</title>
      </Head>
      <h1>first post</h1>
    </Layout>
  );
}
