Minimal Library Management System 📚
Project Overview
A simple, clean, and functional Library Management System built with React, Redux Toolkit Query (RTK Query), and TypeScript on the frontend, and Node.js with Express and MongoDB on the backend.

This system enables users to:

View a list of books

Perform CRUD operations (Create, Read, Update, Delete) on books

Borrow books with quantity and due date management

View a summary of borrowed books

The project focuses on a minimalist UI/UX design with responsive layout for mobile, tablet, and desktop devices. No authentication or payment integration is included, keeping the system simple and focused.

Features
Public Routes (No Authentication)
All pages are accessible without login.

Book Management
Display all books in a table with columns: Title, Author, Genre, ISBN, Copies, Availability, and Actions.

Edit book details with instant UI update.

Delete books with confirmation dialog.

Add new books via a form.

Availability status updates based on the number of copies.

Borrow Books
Borrow books with restrictions on quantity (cannot exceed available copies).

Set due date for borrowed books.

Automatically update book availability.

Borrow Summary
View aggregated data of total quantity borrowed per book.

Technology Stack
Layer	Technology
Frontend	React + TypeScript
State Management	Redux Toolkit + RTK Query
Backend	Node.js + Express.js
Database	MongoDB + Mongoose
Styling	Tailwind CSS

