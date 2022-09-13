export default function Loading({ loading }) {
  if (loading) {
    return (
      <div className="loading-page">
        <h1>Memuat...</h1>
        <p>tunggu sebentar..</p>
      </div>
    );
  }

  return;
}
