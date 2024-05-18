import Link from 'next/link';

const navLinks = [
  { href: '/forgetpassword', label: 'forgetpaswword' },
//   { href: '/products', label: 'Products' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>welcome to auth layout</h1>
      {navLinks.map(link => (
        <Link key={link.href} href={link.href}>
          <a>{link.label}</a>
        </Link>
      ))}
      {children}
    </div>
  );
}