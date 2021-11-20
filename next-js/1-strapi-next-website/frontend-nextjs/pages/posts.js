import Post from "../components/Post";
import { Flex, Box } from "reflexbox";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

const Posts = ({ data, numberOfPosts }) => {
  const { API_URL } = process.env;
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePosts = async () => {
    const res = await fetch(
      `${API_URL}/faker-posts?_start=${posts.length}&_limit=10`
    );
    const newProst = await res.json();
    setPosts((posts) => [...posts, ...newProst]);
  };

  useEffect(() => {
    setHasMore(numberOfPosts > posts.length ? true : false);
  }, [posts]);

  return (
    <Box maxWidth={960} width="100%" mx="auto" px={30}>
      <Box my={40} as="h2">
        Posts
      </Box>

      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </Box>
  );
};
export async function getServerSideProps(context) {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/faker-posts?_limit=10`);
  const data = await res.json();

  const getNumberOfPosts = await fetch(`${API_URL}/faker-posts/count`);
  const numberOfPosts = await getNumberOfPosts.json();

  return { props: { data, numberOfPosts: +numberOfPosts } };
}
export default Posts;
