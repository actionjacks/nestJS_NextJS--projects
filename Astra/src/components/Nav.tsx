export default function Nav({ title }: { title: string }) {
  return (
    <nav>
      {title}
      <h1>--nav--</h1>
      <button className="border-y-4">
        <a href="/pageone">About</a>
      </button>
      <br />
      <button className="border-y-4">
        <a href="/">Home</a>
      </button>
    </nav>
  );
}
