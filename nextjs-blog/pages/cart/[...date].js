import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";

export default function CartDateSlug() {
  const router = useRouter();
  const { date } = router.query;
  return (
    <>
      <h1 className="title">CartDateSlug: {date}</h1>
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
