import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
        Copyright Rikuhachima2 . 2022 - Api From :{" "}
        <Link href="https://jikan.moe">
          <a style={{ textDecoration: "underline" }}>Jikan Moe</a>
        </Link>
      </p>
    </footer>
  );
}
