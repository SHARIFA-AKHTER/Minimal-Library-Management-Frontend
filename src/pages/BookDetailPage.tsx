import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../api/booksApi";
import { Loader } from "lucide-react";

export default function BookDetailPage() {
  const { id } = useParams();
  const { data: book, error, isLoading } = useGetBookByIdQuery(id!);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader className="animate-spin w-8 h-8 text-gray-600" />
        <span className="ml-2 text-gray-600">Loading...</span>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="max-w-lg mx-auto p-6 text-center text-red-600 bg-red-50 rounded-lg shadow">
        Failed to load book details.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b border-gray-200 pb-2">
          {book.title}
        </h2>
        <div className="space-y-2 text-gray-700">
          <p><span className="font-semibold">Author:</span> {book.author}</p>
          <p><span className="font-semibold">Genre:</span> {book.genre}</p>
          <p><span className="font-semibold">ISBN:</span> {book.isbn}</p>
          <p><span className="font-semibold">Description:</span> {book.description || "N/A"}</p>
          <p><span className="font-semibold">Copies:</span> {book.copies}</p>
          <p>
            <span className="font-semibold">Available:</span>{" "}
            {book.available ? (
              <span className="text-green-600 font-medium">Yes</span>
            ) : (
              <span className="text-red-600 font-medium">No</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
