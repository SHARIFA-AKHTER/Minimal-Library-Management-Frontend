
import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface BorrowFormProps {
  maxQuantity: number;
  onSubmit: (data: { quantity: number; dueDate: string }) => void;
  isLoading?: boolean;
}

export default function BorrowForm({
  maxQuantity,
  onSubmit,
  isLoading,
}: BorrowFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ quantity, dueDate });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 space-y-6"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
        Borrow Book
      </h2>

      <div className="space-y-2">
        <Label htmlFor="quantity" className="text-gray-700 text-sm sm:text-base">
          Quantity
        </Label>
        <Input
          id="quantity"
          type="number"
          value={quantity}
          min={1}
          max={maxQuantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition rounded-md"
        />
        <p className="text-xs text-gray-500">
          Maximum available: {maxQuantity}
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dueDate" className="text-gray-700 text-sm sm:text-base">
          Due Date
        </Label>
        <Input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition rounded-md"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 sm:py-3 text-sm sm:text-base"
      >
        {isLoading ? "Borrowing..." : "Borrow Book"}
      </Button>
    </form>
  );
}
