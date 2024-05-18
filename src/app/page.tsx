import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h1>welcome to main layout</h1>
      <Link href="/about">About</Link><br />
      <Link href="/products">Products</Link>
    </div>
  );
}