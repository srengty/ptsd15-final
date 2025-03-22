import Link from "next/link";

export default function HomePage(props) {
  return (
    <>
      {/* react fragment */}
      <a href="/about">About us</a>
      <br />
      <Link href="/privacy" prefetch>
        Privacy policy
      </Link>
      <h1>Hello world</h1>
      <MyC id="titi" other="Another">
        <b>It is bold</b>
        <br />
        <i>It is italic</i>
      </MyC>
    </>
  );
}

function MyC({ children, id, other }) {
  return (
    <h2>
      It is MyC
      <br />
      id = {id}
      <br />
      Other = {other}
      <br />
      echo {"=>>"}
      {children}
    </h2>
  );
}
