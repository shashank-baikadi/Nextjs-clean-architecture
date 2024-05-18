import Link from 'next/link';

const navLinks = [
  { href: '/forgetpassword', label: 'ForgetPassword' },
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },

];

export default function Layout({ children }: { children: React.ReactNode }) {


  return (
    <div>
      <h1>welcome to auth layout</h1>
      {navLinks.map((link) => {

          return (
            <Link key={link.label} href={link.href}>
{link.label}
            </Link>
          );
       
      } )}
      {children}
    </div>
  );
}