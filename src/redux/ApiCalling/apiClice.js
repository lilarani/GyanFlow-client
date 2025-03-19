import { createApi } from "@reduxjs/toolkit/query/react";
import { interceptorQuery } from "./../customInterceptor/interceptor";

export const apiSlice = createApi({
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

        // POST API - createUser
        createUser: builder.mutation({
            query: (newUser) => ({
                url: "/gyanflow/user/regiser",
                method: "POST",
                body: newUser,
            }),
        }),
    }),
});

export const { useCreateUserMutation,useGetUsersQuery, useLogOutUserMutation , useGoogleLoginMutation , useLogInUserMutation } = apiSlice;
export default apiSlice;
