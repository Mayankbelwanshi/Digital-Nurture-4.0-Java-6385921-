import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 1, course: 'Full Stack Development', instructor: 'John Smith' },
    { id: 2, course: 'Data Structures & Algorithms', instructor: 'Alice Green' },
    { id: 3, course: 'Machine Learning Basics', instructor: 'Rahul Mehta' },
  ];

  return (
    <div>
      <h2 className="section-title">Course Details</h2>
      {courses.map((course) => (
        <div key={course.id} className="card">
          <p><strong>Course:</strong> {course.course}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
