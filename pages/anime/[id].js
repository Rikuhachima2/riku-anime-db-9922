import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Anime.module.css";
export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const res = await fetch("http://api.jikan.moe/v4/anime/" + id);

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

export default function AnimeId({ data: anime }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{anime.title}</title>
      </Head>
      <div className={styles.animeDetailContainer}>
        <h1 className={styles.animeDetailTitle}>{anime.title}</h1>

        <picture>
          <source srcSet={anime.images.jpg.large_image_url} type="image/jpg" />
          <img
            loading="lazy"
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
            className={styles.animeDetailImage}
          />
        </picture>

        <div className={styles.animeDetailContent}>
          <div className={styles.genres}>
            <strong>Genre: </strong>
            {anime.genres.map((genre) => {
              return (
                <Link
                  href={genre.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <a className={styles.genre}>{genre.name}</a>
                </Link>
              );
            })}
          </div>

          {anime.score && (
            <div>
              <strong>Rating: </strong>
              <span>{anime.score}</span>
            </div>
          )}

          <div>
            <strong>Studios : </strong>
            {anime.studios.map((studio, index) => {
              return (
                <span key={index} className={styles.genre}>
                  {studio.name}
                </span>
              );
            })}
          </div>
          {anime.season && (
            <div>
              <strong>Aired In : </strong>
              <span>
                {anime.season} , {anime.year}
              </span>
            </div>
          )}

          <h3>Synopsis :</h3>
          <p className={styles.animeDetailSynopsis}>{anime.synopsis}</p>

          <Link href={anime.url}>
            <a style={{ textDecoration: "underline" }}>MAL Link</a>
          </Link>
        </div>
        <div className="col-12">
          <button className="button" onClick={() => router.back()}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
