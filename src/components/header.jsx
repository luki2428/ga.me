"use client";
import Link from "next/link";
import NavLink from "./navLink";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [logged, setLogged] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setLogged(localStorage.session ? true : false);
  }, []);

  const logout = () => {
    localStorage.removeItem("session");
    setLogged(false);
  };

  return (
    <header className="flex flex-row justify-between items-center py-10 px-8 md:px-20 w-full text-[#9F9F9F] text-center select-none absolute z-40 bg-black bg-opacity-90 md:bg-transparent">
      <div className="text-3xl font-bold text-gradient">GA.ME</div>

      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
      </button>

      <nav className="hidden md:flex gap-12 text-lg">
        <NavLink name={"Home"} path={"/"} />
        <NavLink name={"Blog"} path={"/blog"} />
        <NavLink name={"Lista gier"} path={"#"} />
        {logged && <NavLink name={"Twoja lista"} path={"/my-list"} />}
      </nav>

      {logged ? (
        <button
          className="hidden md:block text-lg hover:text-white transition-all"
          onClick={logout}
        >
          Wyloguj się
        </button>
      ) : (
        <Link
          href={"/login"}
          className="hidden md:block text-lg hover:text-white transition-all"
        >
          Zaloguj się
        </Link>
      )}
      {/* <Link
        href={logged ? "/logout" : "/login"}
        className="hidden md:block text-lg hover:text-white transition-all"
      >
        {logged ? "Wyloguj się" : "Zaloguj się"}
      </Link> */}

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 pb-4">
          <nav className="flex flex-col gap-3 text-lg">
            <NavLink name={"Home"} path={"/"} />
            <NavLink name={"Blog"} path={"/blog"} />
            <NavLink name={"Lista gier"} path={"#"} />
            {logged && <NavLink name={"Twoja lista"} path={"/my-list"} />}

            {logged ? (
              <button
                className="hidden md:block text-lg hover:text-white transition-all"
                onClick={logout}
              >
                Wyloguj się
              </button>
            ) : (
              <Link
                href={"/login"}
                className="hidden md:block text-lg hover:text-white transition-all"
              >
                Zaloguj się
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
