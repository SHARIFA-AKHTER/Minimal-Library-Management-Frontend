
// import type { BorrowSummary } from '@/types/borrow';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// export const borrowsApi = createApi({
//   reducerPath: 'borrowsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
//   tagTypes: ['Borrows'],
//   endpoints: (builder) => ({
//     borrowBook: builder.mutation<void, BorrowSummary>({
//       query: (borrow) => ({
//         url: '/borrows',
//         method: 'POST',
//         body: borrow,
//       }),
//       invalidatesTags: ['Borrows'],
//     }),
//     getBorrowSummary: builder.query<BorrowSummary[], void>({
//       query: () => '/borrows/summary',
//       providesTags: ['Borrows'],
//     }),
//   }),
// });

// export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowsApi;


// src/api/borrowsApi.ts
import type { BorrowPayload, BorrowSummary } from '@/types/borrow';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const borrowsApi = createApi({
  reducerPath: 'borrowsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['Borrows'],
  endpoints: (builder) => ({
    borrowBook: builder.mutation<void, BorrowPayload>({
      query: (borrow) => ({
        url: '/borrows',
        method: 'POST',
        body: borrow,
      }),
      invalidatesTags: ['Borrows'],
    }),
    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => '/borrows/summary',
      providesTags: ['Borrows'],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowsApi;
