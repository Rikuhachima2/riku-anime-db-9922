import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div>
        <Link href="/">
          <a>
            <h1>Anime.DB</h1>
          </a>
        </Link>
      </div>
      <nav>
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
