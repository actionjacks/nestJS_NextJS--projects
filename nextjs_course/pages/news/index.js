import Link from "next/link";

function NewsPage() {
  return (
    <div>
      <p>NEWS</p>
      <ul>
        <li>
          <Link href="/news/article-one">article one</Link>
        </li>
      </ul>
    </div>
  );
}
export default NewsPage;
