import { useParams, useNavigate } from "react-router-dom";
import { useGetBookByIdQuery, useUpdateBookMutation } from "../api/booksApi";
import { BookForm } from "../components/BookForm";
import { showSuccess, showError } from "../utils/toast";
import { Loader } from "lucide-react";
import type { Book } from "@/types/book";

export default function EditBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book, isLoading: isFetching } = useGetBookByIdQuery(id!);
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();

  if (isFetching) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] space-y-2">
        <Loader className="animate-spin w-8 h-8 text-gray-600" />
        <span className="text-gray-600">Loading book data...</span>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="max-w-lg mx-auto p-6 text-center text-red-600 bg-red-50 rounded-lg shadow">
        Book not found.
      </div>
    );
  }

  const handleUpdate = async (data: Omit<Book, "_id" | "available">) => {
    const bookId = book._id;
    if (!bookId) {
      showError("Missing Book ID!");
      return;
    }
    try {
      await updateBook({
        id: bookId,
        data: { ...data, available: data.copies > 0 },
      }).unwrap();
      showSuccess("Book updated successfully!");
      navigate("/books");
    } catch {
      showError("Failed to update book.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
          Edit Book
        </h2>
        <BookForm
          onSubmit={handleUpdate}
          initialData={book}
          isLoading={isUpdating}
        />
      </div>
    </div>
  );
}
