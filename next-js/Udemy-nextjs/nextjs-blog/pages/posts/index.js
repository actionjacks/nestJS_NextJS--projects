import AllPosts from "../../components/posts/all-posts";

//todo remove dev
const DUMMY_POSTS = [
  {
    slug: "js-is-fun",
    title: "JS IS SUPER FUN !!",
    image: "js-js.jpg",
    excerpt: "some lorems ipsum about js. Js is super fun and easy",
    date: "2021-09-12",
  },
];

function AllPostsPage() {
  return (
    <>
      <AllPosts posts={DUMMY_POSTS} />
    </>
  );
}
export default AllPostsPage;
