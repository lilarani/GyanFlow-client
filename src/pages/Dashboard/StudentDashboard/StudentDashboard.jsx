import Button from '@/components/customs/Button';
import MouseEffect from '@/components/customs/MouseEffect';
import Card from '@/components/Dashboard/StudentComponents/card';
// import MouseEffect from '@/components/Dashboard/StudentComponents/MouseEffect';
import React, { useEffect, useState } from 'react';
const StudentDashboard = () => {
  const courseList = [
    {
      id: 1,
      name: 'react',
      title: 'React.js for Beginners',
      description:
        'Learn the fundamentals of React.js, including components, props, and state management.',
      instructor: 'John Doe',
      duration: '6 weeks',
      price: '$49.99',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfprLzNl904LPRnV92IGOQAaXTAZ-Td8nXXg&s',
    },
    {
      id: 2,
      name: 'javascript',
      title: 'Mastering JavaScript',
      description:
        'Deep dive into JavaScript concepts, including ES6+, asynchronous programming, and more.',
      instructor: 'Jane Smith',
      duration: '8 weeks',
      price: '$59.99',
      image:
        'https://ellipsiseducation.com/wp-content/uploads/2023/02/javascript-736400_1280.png',
    },
    {
      id: 3,
      name: 'mern',
      title: 'Full-Stack MERN Development',
      description:
        'Build real-world applications using MongoDB, Express.js, React.js, and Node.js.',
      instructor: 'Michael Johnson',
      duration: '12 weeks',
      price: '$99.99',
      image: 'mern-course.jpg',
    },
    {
      id: 4,
      name: 'webDesign',
      title: 'UI/UX Design Essentials',
      description:
        'Learn the principles of user interface and experience design with Figma and Adobe XD.',
      instructor: 'Emily Davis',
      duration: '5 weeks',
      price: '$39.99',
      image: 'uiux-course.jpg',
    },
    {
      id: 5,
      name: 'python',
      title: 'Python for Data Science',
      description:
        'Master Python and data science libraries such as NumPy, Pandas, and Matplotlib.',
      instructor: 'David Wilson',
      duration: '10 weeks',
      price: '$79.99',
      image: 'python-course.jpg',
    },
  ];

  return (
    <div className="w-full  bg-default text-white ">
      <MouseEffect />
      <h1 className="text-3xl p-4 text-center w-full">Our courses</h1>
      <div className="flex flex-wrap gap-6 justify-center p-6">
        {courseList.map((course, index) => (
          <Card key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
