import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  // baseUrl: 'http://localhost:4000',
  baseUrl: 'http://localhost:4000',
  // baseUrl: 'https://gyanflow-server.onrender.com',
  // baseUrl: 'http://localhost:4000',
  credentials: 'include',
});
