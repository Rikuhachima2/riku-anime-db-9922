import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
        Copyright{" "}
        <Link href="https://github.com/rikuhachima2">
          <a target="_blank" rel="noopener noreferrer">
            <Image
              width={24}
              height={24}
              alt="github icon"
              src="/github-icon.svg"
            />{" "}
            Rikuhachima2
          </a>
        </Link>
        . 2022 - Api From :
        <Link href="https://jikan.moe">
          <a style={{ textDecoration: "underline" }}>Jikan Moe</a>
        </Link>
      </p>
    </footer>
  );
}
