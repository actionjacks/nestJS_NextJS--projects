import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage({ post }) {
  if (!post) {
    return <h1>Loading...</h1>;
  }

  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}
export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

//dynamiczna strona! trzeba określać możliwe ścieżki do wygenerowania lub renderowac w chwili zapytania blokując, w zwracanym jsx należy obsłużyć warunek kiedy danych jeszcze nie ma.
// export function getStaticPath() {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// }
export default PostDetailPage;
