import { useState } from "react";
import { Label } from "@radix-ui/react-label";

import type { Book } from "@/types/book";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  onSubmit: (data: Omit<Book, "_id" | "available">) => void;
  initialData?: Partial<Book>;
  isLoading?: boolean;
}

export function BookForm({ onSubmit, initialData = {}, isLoading }: Props) {
  const [title, setTitle] = useState(initialData.title ?? "");
  const [author, setAuthor] = useState(initialData.author ?? "");
  const [genre, setGenre] = useState(initialData.genre ?? "");
  const [isbn, setIsbn] = useState(initialData.isbn ?? "");
  const [description, setDescription] = useState(initialData.description ?? "");
  const [copies, setCopies] = useState(initialData.copies ?? 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      author,
      genre,
      isbn,
      description,
      copies,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-8 max-w-2xl mx-auto rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-blue-600">📚 Add / Edit Book</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title" className="font-medium text-gray-700">
            Title
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter book title"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="author" className="font-medium text-gray-700">
            Author
          </Label>
          <Input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            placeholder="Enter author name"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="genre" className="font-medium text-gray-700">
            Genre
          </Label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400 transition"
          >
            <option value="">Select Genre</option>
            <option value="FICTION">FICTION</option>
            <option value="NON_FICTION">NON_FICTION</option>
            <option value="SCIENCE">SCIENCE</option>
            <option value="HISTORY">HISTORY</option>
            <option value="BIOGRAPHY">BIOGRAPHY</option>
            <option value="FANTASY">FANTASY</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="isbn" className="font-medium text-gray-700">
            ISBN
          </Label>
          <Input
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
            placeholder="Enter ISBN"
            className="w-full"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description" className="font-medium text-gray-700">
            Description
          </Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional description"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="copies" className="font-medium text-gray-700">
            Copies
          </Label>
          <Input
            id="copies"
            type="number"
            value={copies}
            min={0}
            onChange={(e) => setCopies(Number(e.target.value))}
            required
            className="w-full"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full mt-4 md:mt-6"
      >
        {isLoading ? "Saving..." : "Save Book"}
      </Button>
    </form>
  );
}

