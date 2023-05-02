import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";
import { useRouter } from "next/router";

export default function CategorySlug() {
  const router = useRouter();
  //url에 입력한 값을 받아옴
  const { slug, from,age } = router.query;
  return (
    <>
      <h1 className="title">
        category {slug} from {from} age {age}
      </h1>
    </>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
