import BookTable from "../components/BookTable";
import { useGetBooksQuery } from "../api/booksApi";
import { Loader } from "lucide-react";

export default function BooksPage() {
  const { data, error, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] space-y-2">
        <Loader className="animate-spin w-8 h-8 text-gray-600" />
        <span className="text-gray-600">Loading books...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto p-6 text-center text-red-600 bg-red-50 rounded-lg shadow">
        Failed to load books. Please try again later.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
        📚 All Books
      </h2>
      {data && <BookTable books={data} />}
    </div>
  );
}
