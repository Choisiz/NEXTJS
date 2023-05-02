import Link from "next/Link";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../../components/Layout";
import SubLayout from "../../../components/SubLayout";

export async function getServerSideProps() {
  console.log("server");

  return {
    props: { time: new Date().toISOString() },
  };
}

export default function MyInfo() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = "init" } = router.query;

  //location.replace("/settings/my/info?status=editing");
  //url을 바꾸기 위해 처음부터 랜더링 => state유지x,데이터패칭o
  //router.push("/settings/my/info?status=editing");
  //url은 바뀌었지만 완전히 처음부터 랜더링은 아니다. =>state유지o,데이터패칭o
  //router.push("/settings/my/info?status=editing", { shallow: true });
  // =>state유지o,데이터패칭x
  return (
    <>
      <h1 className="title">MyInfo</h1>
      <h1 className="title">click: {String(clicked)}</h1>
      <h1 className="title">status: {status}</h1>
      <button
        onClick={() => {
          alert("edit");
          setClicked(true);
          location.replace("/settings/my/info?status=editing");
        }}
      >
        edit(replace)
      </button>
      <button
        onClick={() => {
          alert("edit");
          setClicked(true);
          router.push("/settings/my/info?status=editing", undefined, {
            shallow: true,
          });
        }}
      >
        edit(push)
      </button>
    </>
  );
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
