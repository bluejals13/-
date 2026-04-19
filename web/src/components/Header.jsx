import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">MyLogo</div>
      <nav>
        <ul className="hidden md:flex space-x-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>
      {menuOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4 space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </header>
  );
}