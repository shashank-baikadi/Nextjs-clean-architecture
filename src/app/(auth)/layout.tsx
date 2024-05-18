'use client'
import Link from 'next/link';
import {useState} from 'react';
const navLinks = [
  { href: '/forgetpassword', label: 'ForgetPassword' },
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },

];

export default function Layout({ children }: { children: React.ReactNode }) {
const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => console.log(input)}>search</button>
        <p>state will be preserved even if u move to login </p>
      </div>
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