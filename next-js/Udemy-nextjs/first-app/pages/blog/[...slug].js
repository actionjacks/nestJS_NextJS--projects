import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);
  // [...something] - get all query patch and put them in array

  return (
    <div>
      <h1>Blog posts</h1>
    </div>
  );
}
export default BlogPostsPage;
