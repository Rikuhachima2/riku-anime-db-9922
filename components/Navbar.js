import Link from "next/link";

export async function getServerSideProps(ctx) {
  console.log(ctx.req);
  return {
    props: {},
  };
}

export default function Navbar({ loading }) {
  return (
    <header>
      <div>
        <Link href="/">
          <a>
            <h1>Anime.DB</h1>
          </a>
        </Link>
      </div>
      <nav className={`${loading ? "disabled" : ""}`}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/anime">
          <a>AnimeList</a>
        </Link>
      </nav>
    </header>
  );
}
