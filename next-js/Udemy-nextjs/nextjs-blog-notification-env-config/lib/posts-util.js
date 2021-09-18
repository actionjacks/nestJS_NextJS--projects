import fs from "fs";
import path from "path";
import matter from "gray-matter";

//folder whit files .md
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //remove file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}
export function getAllPosts() {
  //const postFiles = fs.readdirSync(postsDirectory);
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((a, b) => {
    a.date > b.date ? -1 : 1;
  });
  return sortedPosts;
}
export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
