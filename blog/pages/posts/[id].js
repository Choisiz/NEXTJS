import Head from "next/head";
import Layout from "../../components/Layout";
import { getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import { useRouter } from "next/router";
import { MDXRemote } from "next-mdx-remote";
import CodeBlock from "../../components/CodeBlock";
export async function getStaticPaths() {
  const paths = [
    {
      params: {
        id: "ssg-ssr",
      },
    },
  ];
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const Button = ({ children }) => {
  return (
    <button
      className="bg-black dark:bg-white text-lo text-teal-200 dark:text-teal-700 rounded-lg px-5"
      onClick={() => alert("thank you")}
    >
      {children}
    </button>
  );
};
const components = { Button, CodeBlock };

export default function Post({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>loading...</div>;
  }
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}></div>
        {postData.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
        {postData.mdxSource && (
          <MDXRemote {...postData.mdxSource} components={components} />
        )}
      </article>
    </Layout>
  );
}
