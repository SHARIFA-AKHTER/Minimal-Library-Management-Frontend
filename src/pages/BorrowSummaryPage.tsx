import { useGetBorrowSummaryQuery } from "@/api/borrowApi";
import { Loader } from "lucide-react";

export default function BorrowSummaryPage() {
  const { data, error, isLoading } = useGetBorrowSummaryQuery();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] space-y-2">
        <Loader className="animate-spin w-8 h-8 text-gray-600" />
        <span className="text-gray-600">Loading borrow summary...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto p-6 text-center text-red-600 bg-red-50 rounded-lg shadow">
        Failed to load borrow summary. Please try again later.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Borrow Summary
      </h2>

      <div className="overflow-x-auto rounded-lg border shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left whitespace-nowrap">Book Title</th>
              <th className="px-4 py-2 whitespace-nowrap text-center">ISBN</th>
              <th className="px-4 py-2 whitespace-nowrap text-center">Total Quantity Borrowed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data?.map((borrow) => (
              <tr key={borrow._id}>
                <td className="px-4 py-2 whitespace-nowrap">{borrow.book?.title || "N/A"}</td>
                <td className="px-4 py-2 whitespace-nowrap text-center">{borrow.book?.isbn || "N/A"}</td>
                <td className="px-4 py-2 whitespace-nowrap text-center">{borrow.totalQuantityBorrowed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

