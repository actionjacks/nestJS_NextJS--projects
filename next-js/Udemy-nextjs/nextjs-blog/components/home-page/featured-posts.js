import PostGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

function FeaturesPosts({ posts }) {
  return (
    <section className={classes.lastes}>
      <h2>Features Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}

export default FeaturesPosts;
