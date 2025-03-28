import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`); // Setting the Authorization header
    }
    return headers; // Returning the modified headers object
  }

  // baseUrl: 'http://localhost:4000',
  // baseUrl: 'http://localhost:4000',

});
