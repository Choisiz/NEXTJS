import Link from "next/Link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";

export default function CartDateSlug() {
  const router = useRouter();
  //uri뒤에 계속 오는 값들을 배열로 만들수 있다.
  //만약 폴더뒤에 아무것도 없다? => 404 해결법: [파일]=>[[파일]]
  //url에 직접 입력하지 않고 url정보 받는법
  //1.Link href='?' 를 통해 받기
  //2.router.push('?)를 통해 받기
  const { date } = router.query;
  return (
    <>
      <h1 className="title">CartDateSlug: {JSON.stringify(date)}</h1>
      <Link href="/cart/2023/12/31">2023/12/31</Link>
      <br />
      <button onClick={() => router.push("/cart/2023/01/01")}>
        2023/01/01
      </button>
    </>
  );
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
