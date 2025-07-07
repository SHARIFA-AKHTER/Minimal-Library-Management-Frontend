
// export interface BorrowSummary {
//   _id: string;
//   book?: {
//     title?: string;
//     isbn?: string;
    
//   };
//   totalQuantityBorrowed: number;
// }

// src/types/borrow.ts
export interface BorrowPayload {
  book: string;          
  quantity: number;
  dueDate: string;
}

export interface BorrowSummary {
  _id: string;
  book?: {
    title?: string;
    isbn?: string;
  };
  totalQuantityBorrowed: number;
}
