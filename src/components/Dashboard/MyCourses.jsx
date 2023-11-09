import React from 'react';
import { useSelector } from 'react-redux';

function MyCoursesPage() {
  // Fetch the courses from the Redux store
  const myCourses = useSelector((state) => state.studentReducer);

  return (
    <div className="bg-gray-400 p-4 min-h-screen">
      <h1 className="text-3xl font-bold my-4 text-center">My Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {myCourses.map((course) => (
          <div key={course.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-100 transform hover:scale-105 transition-transform duration-300">
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2">{course.name}</div>
              <div className="text-blue-600 text-base italic font-bold mb-2">{course.instructor}</div>
              <div className="text-gray-600 text-base mb-2">Progress: {course.progress}%</div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-red-600">
                      {course.progress}% Complete
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-red-600">
                      0%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                  <div
                    style={{ width: `${course.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCoursesPage;
