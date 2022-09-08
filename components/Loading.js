export default function Loading({ loading }) {
  return (
    <div className={loading ? "loading" : "d-none"}>
      <h1>Memuat...</h1>
      <p>tunggu sebentar..</p>
    </div>
  );
}
