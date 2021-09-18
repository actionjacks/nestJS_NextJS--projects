import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>jaxoo</title>
        <meta name="description" content="some posts" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    //  revalidate: 3000,
  };
}

export default HomePage;
