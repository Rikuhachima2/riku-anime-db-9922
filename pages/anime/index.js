import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// styles
import styles from "../../styles/Anime.module.css";

export async function getServerSideProps(ctx) {
  const res = await fetch(
    "http://api.jikan.moe/v4/anime?limit=20&type=tv&start_date=2022-07"
  );

  const { data } = await res.json();
  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}

export default function AnimePage({ data, url }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  async function handleSearch(e) {
    e.preventDefault();
    router.replace({
      pathname: "/anime/search",
      query: {
        q: search,
      },
    });
  }

  return (
    <div>
      <Head>
        <title>Anime List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.sectionHeader}>
        <h1>List Anime</h1>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            id="search"
            className={styles.inputSearch}
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            minLength={5}
            maxLength={20}
          />
          <button type="submit" className={styles.btnSearch}>
            Search
          </button>
        </form>
      </div>
      <div className={styles.animesContainer}>
        {data.map((anime, index) => {
          return (
            <div className={styles.card} key={anime.mal_id}>
              {anime.score && (
                <div className={styles.rating}>{anime.score}</div>
              )}

              <picture>
                <source srcSet={anime.images.jpg.image_url} type="image/jpg" />
                <img
                  loading="lazy"
                  src={anime.images.jpg.image_url}
                  alt="img"
                  className={styles.animeImage}
                />
              </picture>

              <div className={styles.animeContent}>
                <Link href={`/anime/${anime.mal_id}`}>
                  <h2 className={styles.title}>{anime.title}</h2>
                </Link>

                {anime.season && (
                  <p style={{ textDecoration: "underline" }}>
                    {anime.season}, {anime.year}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
