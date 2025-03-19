import { createApi } from '@reduxjs/toolkit/query/react';
import { interceptorQuery } from './../customInterceptor/interceptor';

export const apiSlice = createApi({
<<<<<<< HEAD
    reducerPath: "api",
    baseQuery: interceptorQuery,
    endpoints: (builder) => ({
        // all GET API
        getUsers: builder.query({
            query: () => "/gyanflow/user/users"
        }),
        



        logOutUser: builder.mutation({
            query: () => ({
                url: "/gyanflow/user/logout",
                method: 'GET'
            })
        }),

        googleLogin: builder.mutation({
            query: (data) => ({
                url: "/gyanflow/user/googleLogin",
                method : "POST",
                body : data
            })
        }),

        // login user 
        logInUser : builder.mutation({
            query : (data)=>({
                url : '/gyanflow/user/login',
                method : "POST" ,
                body : data
            })
        }),
=======
  reducerPath: 'api',
  baseQuery: interceptorQuery,
  endpoints: builder => ({
    // all GET API
    // getUsers: builder.query({
    //     query: () => "/users"
    // })
>>>>>>> 1e61f05c14935776de95d55fd8354aaa2f733e02

    // POST API - createUser
    createUser: builder.mutation({
      query: newUser => ({
        //   https://gyanflow-server.onrender.com
        url: '/gyanflow/user/regiser',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const { useCreateUserMutation,useGetUsersQuery, useLogOutUserMutation , useGoogleLoginMutation , useLogInUserMutation } = apiSlice;
export default apiSlice;
