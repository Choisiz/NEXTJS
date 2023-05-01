import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";
import { useRouter } from "next/router";

export default function CategorySlug() {
  const router = useRouter();
  console.log("r", router);
  const { slug, from } = router.query;
  return (
    <>
      <h1 className="title">
        category {slug} from {from}
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
