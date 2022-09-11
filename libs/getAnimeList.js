export default async function getAnimeList(query) {
  // set default query
  if (!query) {
    query = "limit=20&type=tv&start_date=2022-07&sfw=false&status=airing";
  }

  const res = await fetch(`http://api.jikan.moe/v4/anime?${query}`);

  const { data } = await res.json();
  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  return { data };
}
