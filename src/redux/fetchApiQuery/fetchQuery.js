import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000',
  // baseUrl: 'https://gyanflow-server.onrender.com',
  prepareHeaders: headers => {
    const token = localStorage.getItem('token');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers; // Returning the modified headers object
  },

  // baseUrl: 'https://gyanflow-server.onrender.com',
  // baseUrl: 'https://gyanflow-server.onrender.com',
});
