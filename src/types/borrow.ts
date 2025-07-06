
export interface BorrowSummary {
  _id: string;
  book?: {
    title?: string;
    isbn?: string;
    
  };
  totalQuantityBorrowed: number;
}

