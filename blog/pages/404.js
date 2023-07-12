import Link from "next/link";

export default function NotFound404() {
  return (
    <>
      <div>내용을 찾을 수 없습니다.</div>
      <Link href="/">
        <p>홈으로</p>
      </Link>
    </>
  );
}
