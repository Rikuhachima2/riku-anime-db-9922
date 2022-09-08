import Link from "next/link";
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
  return (
    <div>
      <div className={styles.animeDetailContainer}>
        <h1 className={styles.animeDetailTitle}>{anime.title}</h1>

        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className={styles.animeDetailImage}
        />

        <div className={styles.animeDetailContent}>
          <div></div>

          <p className={styles.animeDetailSynopsis}>{anime.synopsis}</p>
        </div>
        <div className="col-12">
          <Link href="/anime">
            <a className="button">Back</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
