import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p className="kicker">404</p>
      <h2 className="page-title">That page is not on this site.</h2>
      <p>
        <Link href="/">Back home</Link>
      </p>
    </div>
  );
}
