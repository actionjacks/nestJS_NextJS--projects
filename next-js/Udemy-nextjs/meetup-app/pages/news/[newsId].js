import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  router.query.newsId;
  return (
    <div>
      <h1>{router.query.newsId}</h1>
    </div>
  );
}
export default DetailPage;
