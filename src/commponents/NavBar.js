import Link from "next/link.js";
import React from "react";

const NavBar = () => {
  return (
    <nav className="sticky">
      <ul className="flex gap-5 justify-center p-5 font-semibold">
        <li>
          <Link href="/">ACCUEIL</Link>
        </li>
        <li>
          <Link href="/blog">BLOG</Link>
        </li>
        <li>
          <Link href="/utilisateur">UTILISATEUR</Link>
        </li>
        <li>
          <Link href="/products">PRODUITS</Link>
        </li>
        <li>
          <Link href="/listes">LISTES</Link>
        </li>
        <li>
          <Link href="/compositions">COMPOSITION</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
