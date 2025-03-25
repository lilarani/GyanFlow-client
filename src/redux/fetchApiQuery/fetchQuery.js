import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://gyanflow-server.onrender.com',
  // baseUrl: 'https://gyanflow-server.onrender.com',
  // baseUrl: 'https://hello-2-o93u.onrender.com',
  credentials: 'include',
});
