"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { BtnRegular } from "./BtnRegular";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll(); // ← dispara una vez al montar
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-scrolled={scrolled} // ← atributo para Tailwind v4
      className="sticky top-0 z-50 
        flex items-center justify-between py-6 px-[12.5%] 
        transition-colors duration-300
        data-[scrolled=true]:bg-card data-[scrolled=true]:shadow-md
        backdrop-blur-sm data-[scrolled=false]:backdrop-blur-0
      ">
      <div className="hover:scale-[1.1] transition-transforms duration-300">
        <Link href="/" className="text-5xl font-lligat">
          Mountain Blog
        </Link>
      </div>
      <div className="flex space-x-10 font-sans text-lg items-center">
        <NavLinks />
        <div>
          <BtnRegular label="Registrate" onClick={() => {}} />
        </div>
      </div>
    </nav>
  );
}
