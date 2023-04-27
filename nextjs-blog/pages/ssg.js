import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export async function getStaticProps() {
  console.log("ssg");
  return {
    props: { time: new Date().toISOString() },
  };
}
export default function SSG({ time }) {
  return (
    <main>
      <h1 className="title">{time} essg 페이지 입니다.</h1>
    </main>
  );
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
