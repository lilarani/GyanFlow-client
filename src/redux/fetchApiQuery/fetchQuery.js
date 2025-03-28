import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://hello-2-o93u.onrender.com',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`); // Setting the Authorization header
    }
    return headers; // Returning the modified headers object
  }

  // baseUrl: 'https://hello-2-o93u.onrender.com',
  // baseUrl: 'https://hello-2-o93u.onrender.com',

});
