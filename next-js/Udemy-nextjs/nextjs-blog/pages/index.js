import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
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

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
export default HomePage;
