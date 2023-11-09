import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeCourses from '../../redux/data';

function CourseCard({ course }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-100 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
      <Link to={`/course/${course.id}`}>
        <div className="px-6 py-4">
          <div className="font-semibold text-xl mb-2">{course.name}</div>
          <div className="text-blue-600 text-base italic font-bold mb-2">{course.instructor}</div>
          <p className="text-gray-600 text-base">{course.description}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-700 text-2xl font-bold">{`$${course.price}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function HomePage() {
  const [search, setSearch] = useState('');

  const filteredCourses = fakeCourses
    .slice()
    .sort((a, b) => (a.full ? 1 : -1))
    .filter(
      (course) =>
        course.name.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="bg-gray-400 p-4">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold my-4 text-center">Available Courses</h1>
        <input
          type="text"
          className="w-4/6 p-2 rounded-md border-gray-300 focus:ring focus:ring-blue-200"
          placeholder="Search by course name or instructor"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
