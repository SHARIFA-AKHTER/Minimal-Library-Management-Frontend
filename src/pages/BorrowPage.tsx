
import { useParams, useNavigate } from "react-router-dom";
import { useGetBookByIdQuery } from "../api/booksApi";
import { showSuccess, showError } from "../utils/toast";
import { Loader } from "lucide-react";
import { useBorrowBookMutation } from "@/api/borrowApi";
import BorrowForm from "@/components/BorrowForm";

export default function BorrowPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  
  const { data: book, isLoading } = useGetBookByIdQuery(bookId!);
  const [borrowBook, { isLoading: isBorrowing }] = useBorrowBookMutation();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] space-y-2">
        <Loader className="animate-spin w-8 h-8 text-gray-600" /> Loading...
      </div>
    );
  }

  if (!book) {
    return <div className="max-w-lg mx-auto p-6 text-center
     text-red-600 bg-red-50 rounded-lg shadow">
      Book not found.
      </div>;
  }


  const handleBorrow = async (data: { quantity: number; dueDate: string }) => {
  console.log("handleBorrow called with:", data);
  if (data.quantity > book.copies) {
    showError(`Cannot borrow more than ${book.copies} copies.`);
    return;
  }
  try {
    console.log("📦 Borrow Payload:", {
      bookId: book._id,
      quantity: data.quantity,
      dueDate: data.dueDate,
    });

    const result = await borrowBook({
      book: book._id,
      quantity: data.quantity,
      dueDate: data.dueDate,
    }).unwrap();

    console.log("Borrow successful:", result);
    showSuccess("Book borrowed successfully!");
    navigate("/borrow-summary");
  } catch (error) {
    console.error("Borrow failed:", error);
    showError("Failed to borrow book.");
  }
};


  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">Borrow "{book.title}"</h2>
      <BorrowForm
        maxQuantity={book.copies}
        onSubmit={handleBorrow}
        isLoading={isBorrowing}
      />
    </div>
  );
}



