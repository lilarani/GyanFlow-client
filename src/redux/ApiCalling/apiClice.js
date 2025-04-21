import { createApi } from '@reduxjs/toolkit/query/react';
import { interceptorQuery } from './../customInterceptor/interceptor';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: interceptorQuery,
  tagTypes: ['user', 'module', 'video', 'update', 'quiz', 'payment'],
  endpoints: builder => ({
    // all GET API
    getUsers: builder.query({
      query: () => '/gyanflow/user/users',
      providesTags: ['user'],
    }),

    //all stats
    getStats: builder.query({
      query: () => 'gyanflow/all-stats/stats',
    }),

    // all instructors
    getInstructors: builder.query({
      query: () => '/gyanflow/user/all-instructors',
    }),

    // course for instructor
    courseForInstructor: builder.query({
      query: id => `/gyanflow/cours/course-for-instructor/${id}`,
    }),
    allModules: builder.query({
      query: id => `/gyanflow/instructor/all-modules/${id}`,
      providesTags: ['video', 'module'],
    }),

    // courses get api
    getCourse: builder.query({
      query: () => '/gyanflow/cours/all-course',
      providesTags: ['course'],
    }),

    // features course api
    getFeaturesCourse: builder.query({
      query: () => '/gyanflow/cours/features-course',
      providesTags: ['course'],
    }),

    logOutUser: builder.mutation({
      query: () => ({
        url: '/gyanflow/user/logout',
        method: 'GET',
      }),
    }),

    getMyUser: builder.mutation({
      query: email => ({
        url: `/gyanflow/user/role/${email}`,
        method: 'GET',
      }),
    }),

    // features course details
    getFeaturesCourseDetails: builder.query({
      query: id => ({
        url: `/gyanflow/cours/features-course/${id}`,
        providesTags: ['course'],
      }),
    }),

    googleLogin: builder.mutation({
      query: data => ({
        url: '/gyanflow/user/googleLogin',
        method: 'POST',
        body: data,
      }),
    }),

    // course delete
    deleteCourses: builder.mutation({
      query: id => ({
        url: `/gyanflow/cours/course/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['course'],
    }),

    // update user
    updateUser: builder.mutation({
      query: ({ id, info }) => ({
        url: `/gyanflow/user/updateUserInfo/${id}`,
        method: 'PUT',
        body: info,
      }),
      invalidatesTags: ['update'],
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

    createModule: builder.mutation({
      query: newModule => ({
        url: '/gyanflow/instructor/add-module',
        method: 'POST',
        body: newModule,
      }),
      invalidatesTags: ['module'],
    }),

    createVideo: builder.mutation({
      query: newVedioInfo => ({
        url: '/gyanflow/instructor/add-video',
        method: 'POST',
        body: newVedioInfo,
      }),
      invalidatesTags: ['video'],
    }),
    // /gyanflow/quiz/addquiz/${instructorId}/${modulNo}
    createQuiz: builder.mutation({
      query: ({ instructorId, modulNo, quiz }) => ({
        url: `/gyanflow/quiz/addquiz/${instructorId}/${modulNo}/`,
        method: 'POST',
        body: quiz,
      }),
    }),

    // gyanflow/quiz/getquizforModule/${modulNo}
    getQuizForSpeceficModule: builder.query({
      query: modulNo => `gyanflow/quiz/getquizforModule/${modulNo}`,
      providesTags: ['quiz'],
    }),
    // /gyanflow/quiz/quizzes/${id}
    deleteQuiz: builder.mutation({
      query: id => ({
        url: `/gyanflow/quiz/quizzes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['quiz'],
    }),
    createCourse: builder.mutation({
      query: newCourse => ({
        url: '/gyanflow/cours/add-course',
        method: 'POST',
        body: newCourse,
      }),
      invalidatesTags: ['quiz'],
    }),

    //create announcement
    createAnnouncement: builder.mutation({
      query: newAnnouncement => ({
        url: '/gyanflow/annoucement/addAnnouncement',
        method: 'POST',
        body: newAnnouncement,
      }),
      invalidatesTags: ['quiz'],
    }),

    // ssl payments apis
    payment: builder.mutation({
      query: paymentData => ({
        url: '/gyanflow/ssl-payment/init',
        method: 'POST',
        body: paymentData,
      }),

      invalidatesTags: ['payment'],
    }),

    // successPayment
    successPayment: builder.mutation({
      query: () => ({
        url: '/gyanflow/ssl-payment/success-payment',
        method: 'POST',
      }),
    }),

    // student purches courses
    getStudentCourse: builder.query({
      query: id => ({
        url: `/gyanflow/ssl-payment/student-courses/${id}`,
        method: 'GET',
      }),
    }),

    // get purches courses
    getAllEnrolledCourse: builder.query({
      query: () => '/gyanflow/ssl-payment/allCourse',
      providesTags: 'payment',
    }),

    // chat bot response
    message: builder.mutation({
      query: ({ prompt }) => ({
        url: '/gyanflow/chatbot/chatbot-ask',
        method: 'POST',
        body: { prompt },
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetUsersQuery,
  useGetMyUserMutation,
  useLogOutUserMutation,
  useGoogleLoginMutation,
  useLogInUserMutation,
  useGetCourseQuery,
  useGetFeaturesCourseQuery,
  useGetFeaturesCourseDetailsQuery,
  useDeleteCoursesMutation,
  useDeleteUserMutation,
  useCreateAnnouncementMutation,
  useCreateCourseMutation,
  useGetInstructorsQuery,
  useCourseForInstructorQuery,
  useAllModulesQuery,
  useCreateModuleMutation,
  useCreateVideoMutation,
  useUpdateUserMutation,
  useCreateQuizMutation,
  useDeleteQuizMutation,
  useGetQuizForSpeceficModuleQuery,
  usePaymentMutation,
  useSuccessPaymentMutation,
  useGetStudentCourseQuery,
  useGetAllEnrolledCourseQuery,
  useMessageMutation,
  useGetStatsQuery,
} = apiSlice;
export default apiSlice;
