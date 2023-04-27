import Link from "next/Link";

export default function SubLayout({ children }) {
  return (
    <div>
      <h1>
        <Link href="/">Home</Link>
      </h1>
      {children}
    </div>
  );
}
