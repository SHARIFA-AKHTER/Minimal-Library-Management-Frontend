import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';  // Install lucide-react or replace with any icons you want

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold">
          📚 Library
        </h1>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/books"
            className="hover:text-blue-400 transition"
          >
            All Books
          </Link>
          <Link
            to="/create-book"
            className="hover:text-blue-400 transition"
          >
            Add Book
          </Link>
          <Link
            to="/borrow-summary"
            className="hover:text-blue-400 transition"
          >
            Borrow Summary
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 pb-4 space-y-2">
          <Link
            to="/books"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            All Books
          </Link>
          <Link
            to="/create-book"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Add Book
          </Link>
          <Link
            to="/borrow-summary"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Borrow Summary
          </Link>
        </div>
      )}
    </nav>
  );
}
