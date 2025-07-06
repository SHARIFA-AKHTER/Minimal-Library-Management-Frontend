import type { Book } from "@/types/book";
import { useCreateBookMutation } from "../api/booksApi";

import { showError, showSuccess } from "../utils/toast";
import { useNavigate } from "react-router-dom";
import { BookForm } from "@/components/BookForm";

export default function CreateBookPage() {
  const navigate = useNavigate();
  const [createBook, { isLoading }] = useCreateBookMutation();

  const handleSubmit = async (data: Omit<Book, "_id" | "available">) => {
    console.log("Submitting book:", data);
    try {
      await createBook(data).unwrap();
      showSuccess("Book created successfully!");
      navigate("/books");
    } catch {
      showError("Failed to create book.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
          Add New Book
        </h2>
        <BookForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}
