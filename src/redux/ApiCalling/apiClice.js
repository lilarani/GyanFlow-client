import { createApi } from '@reduxjs/toolkit/query/react';
import { interceptorQuery } from './../customInterceptor/interceptor';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: interceptorQuery,
  tagTypes: ['user'],
  endpoints: builder => ({
    // all GET API
    getUsers: builder.query({
      query: () => '/gyanflow/user/users',
      providesTags: ['user'],
    }),

    getMyUser: builder.query({
      query: email => `/gyanflow/user/role/${email}`,
      method: 'GET',
    }),

    // all instructors 
    getInstructors: builder.query({
      query: () => '/gyanflow/user/all-instructors'
    }),

    
    // course for instructor 
    courseForInstructor : builder.query({
      query : (id)=> `/gyanflow/cours/course-for-instructor/${id}`
    }),
    // courses get api
    getCourse: builder.query({
      query: () => '/gyanflow/cours/all-course',
    }),
    
    logOutUser: builder.mutation({
      query: () => ({
        url: '/gyanflow/user/logout',
        method: 'GET',
      }),
    }),
    
    googleLogin: builder.mutation({
      query: data => ({
        url: '/gyanflow/user/googleLogin',
        method: 'POST',
        body: data,
      }),
    }),

    // login user
    logInUser: builder.mutation({
      query: data => ({
        url: '/gyanflow/user/login',
        method: 'POST',
        body: data,
      }),
    }),

    // delete user
    deleteUser: builder.mutation({
      query: email => ({
        url: `/gyanflow/user/deleteUser/${email}`,
        method: 'DELETE',
        // params: { email: email },
      }),
      invalidatesTags: ['user'],
    }),

    // POST API - createUser
    createUser: builder.mutation({
      query: newUser => ({
        //   https://gyanflow-server.onrender.com
        url: '/gyanflow/user/regiser',
        method: 'POST',
        body: newUser,
      }),
    }),

    createCourse: builder.mutation({
      query: newCourse => ({
        url: '/gyanflow/cours/add-course',
        method: 'POST',
        body: newCourse,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetUsersQuery,
  useGetMyUserQuery,
  useLogOutUserMutation,
  useGoogleLoginMutation,
  useLogInUserMutation,
  useGetCourseQuery,
  useDeleteUserMutation,
  useCreateCourseMutation,
  useGetInstructorsQuery,
  useCourseForInstructorQuery
} = apiSlice;
export default apiSlice;
