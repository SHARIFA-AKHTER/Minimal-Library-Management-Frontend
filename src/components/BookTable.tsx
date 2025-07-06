import { useNavigate } from "react-router-dom";
import { useDeleteBookMutation } from "../api/booksApi";
import { showError, showSuccess } from "../utils/toast";
import { useState } from "react";
import { ConfirmDialog } from "./ConfirmDialog";
import type { Book } from "@/types/book";
import { Button } from "./ui/button";

interface Props {
  books: Book[];
}

export default function BookTable({ books }: Props) {
  const navigate = useNavigate();
  const [deleteBook] = useDeleteBookMutation();
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      showSuccess("Book deleted successfully!");
      setConfirmId(null);
    } catch {
      showError("Failed to delete book.");
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border shadow-sm bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
        <thead className="bg-gray-100">
          <tr>
           
            <th className="px-2 md:px-4 py-2 text-left">Title</th>
            <th className="px-2 md:px-4 py-2">Author</th>
            <th className="px-2 md:px-4 py-2">Genre</th>
            <th className="px-2 md:px-4 py-2 hidden sm:table-cell">ISBN</th> 
            <th className="px-2 md:px-4 py-2 hidden sm:table-cell">Copies</th> 
            <th className="px-2 md:px-4 py-2 hidden md:table-cell">Available</th> 
            <th className="px-2 md:px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {books.map((book) => (
            <tr key={book._id} className="hover:bg-gray-50 transition">
              <td className="px-2 md:px-4 py-2">{book.title}</td>
              <td className="px-2 md:px-4 py-2">{book.author}</td>
              <td className="px-2 md:px-4 py-2">{book.genre}</td>
              <td className="px-2 md:px-4 py-2 hidden sm:table-cell">{book.isbn}</td>
              <td className="px-2 md:px-4 py-2 hidden sm:table-cell">{book.copies}</td>
              <td className="px-2 md:px-4 py-2 hidden md:table-cell">
                {book.available ? (
                  <span className="text-green-600 font-semibold">Yes</span>
                ) : (
                  <span className="text-red-600 font-semibold">No</span>
                )}
              </td>
              <td className="px-2 md:px-4 py-2 text-center">
                <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center">
                  <Button
                    variant="secondary"
                    className="flex-1 md:flex-none"
                    onClick={() => navigate(`/edit-book/${book._id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="default"
                    className="flex-1 md:flex-none"
                    onClick={() => navigate(`/borrow/${book._id}`)}
                  >
                    Borrow
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1 md:flex-none"
                    onClick={() => setConfirmId(book._id)}
                  >
                    Delete
                  </Button>
                </div>
                <ConfirmDialog
                  open={confirmId === book._id}
                  onClose={() => setConfirmId(null)}
                  onConfirm={() => handleDelete(book._id)}
                  title="Delete Book"
                  description="Are you sure you want to delete this book? This action cannot be undone."
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
