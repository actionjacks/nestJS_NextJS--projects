import Link from "next/link";
import Image from "next/image";

import classes from "./post-item.module.css";

function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;

  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/assets/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href="/">
        <a>
          <div className={classes.image}>
            <Image
              //  src={imagePath}
              src="/assets/posts/js-js.jpg"
              alt={title}
              width={300}
              height={200}
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
