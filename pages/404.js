import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="error-page"
      style={{
        textAlign: "left",
      }}
    >
      <h2>Ooop..</h2>
      <p>Halaman Tidak ditemukan</p>
      <Link href="/anime">
        <a>Kembali</a>
      </Link>
    </div>
  );
}
