import CourseCard from './CourseCard';

import React from 'react';

const Courses = () => {
  const courses = [
    {
      title: 'React Fundamentals',
      instructor: 'John Doe',
      progress: 80,
      status: 'Ongoing',
      type: 'conceptul',
    },
    {
      title: 'Tailwind CSS Mastery',
      instructor: 'Sarah Smith',
      progress: 100,
      status: 'Completed',
      type: 'default',
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          title={course.title}
          instructor={course.instructor}
          progress={course.progress}
          status={course.status}
        />
      ))}
    </div>
  );
};

export default Courses;
