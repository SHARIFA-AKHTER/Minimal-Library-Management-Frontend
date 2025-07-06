import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BooksPage from '@/pages/BooksPage';
import CreateBookPage from '@/pages/CreateBookPage';
import EditBookPage from '@/pages/EditBookPage';
import BookDetailPage from '@/pages/BookDetailPage';
import BorrowPage from '@/pages/BorrowPage';
import BorrowSummaryPage from '@/pages/BorrowSummaryPage';
import Home from '@/pages/Home';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen p-4">
        <Routes>
          <Route path = "/"element={<Home />}/>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/create-book" element={<CreateBookPage />} />
          <Route path="/edit-book/:id" element={<EditBookPage />} />
          <Route path="/books/:id" element={<BookDetailPage />} />
          <Route path="/borrow/:bookId" element={<BorrowPage />} />
          <Route path="/borrow-summary" element={<BorrowSummaryPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
