

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          📚 Minimal Library Management System
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Easily manage your library—view, add, edit, and track borrowed books in one place.
        </p>
      </section>

      {/* Quick Actions Section */}
      <section className="py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-800">
          🚀 Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* All Books */}
          <Link
            to="/books"
            className="bg-white border rounded-lg p-6 text-center shadow hover:shadow-lg transition"
          >
            <div className="text-blue-500 text-5xl mb-3">📖</div>
            <h3 className="text-lg font-semibold mb-2">All Books</h3>
            <p className="text-gray-500">Browse and manage your entire book collection.</p>
          </Link>

          {/* Add New Book */}
          <Link
            to="/create-book"
            className="bg-white border rounded-lg p-6 text-center shadow hover:shadow-lg transition"
          >
            <div className="text-green-500 text-5xl mb-3">➕</div>
            <h3 className="text-lg font-semibold mb-2">Add New Book</h3>
            <p className="text-gray-500">Quickly add a new book to your library.</p>
          </Link>

          {/* Borrow Summary */}
          <Link
            to="/borrow-summary"
            className="bg-white border rounded-lg p-6 text-center shadow hover:shadow-lg transition"
          >
            <div className="text-purple-500 text-5xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2">Borrow Summary</h3>
            <p className="text-gray-500">Track borrowed books and their quantities.</p>
          </Link>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-50 py-10 text-center mt-auto">
        <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800">
          Ready to manage your library?
        </h3>
        <Link
          to="/books"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          📚 View All Books
        </Link>
      </section>
    </main>
  );
}
