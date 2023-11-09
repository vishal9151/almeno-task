import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse } from '../../redux/reducers/userReducer';
import fakeCourses from '../../redux/data';

function CourseDetailPage() {
  const { id } = useParams();
  const selectedCourse = fakeCourses.find((course) => course.id === parseInt(id, 10));
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();

  if (!selectedCourse) {
    return <div>No course found for this ID.</div>;
  }

  // Check if the course is already in the cart using useSelector
  const isAlreadyAdded = useSelector((state) =>
    state.studentReducer.some((course) => course.id === selectedCourse.id)
  );

  // Use useEffect to set addedToCart based on whether the course is already added
  useEffect(() => {
    if (isAlreadyAdded) {
      setAddedToCart(true);
    }
  }, [isAlreadyAdded]);

  const handleAddToCart = () => {
    if (!isAlreadyAdded) {
      dispatch(addCourse(selectedCourse));
      setAddedToCart(true);
    }
    return;
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold my-4 text-center">{selectedCourse.name}</h1>

      <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Course Details</h2>
        <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
        <p><strong>Description:</strong> {selectedCourse.description}</p>
        <p><strong>Enrollment Status:</strong> {selectedCourse.enrollmentStatus}</p>
        <p><strong>Duration:</strong> {selectedCourse.duration}</p>
        <p><strong>Schedule:</strong> {selectedCourse.schedule}</p>
        <p><strong>Location:</strong> {selectedCourse.location}</p>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Syllabus</h2>
        <ul>
          {selectedCourse.syllabus.map((item) => (
            <li key={item.weeks}><strong>Week {item.weeks}:</strong> {item.topic}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleAddToCart}
        className={`bg-blue-500 text-white py-2 px-4 rounded ${addedToCart ? 'bg-green-500' : 'bg-blue-500'}`}
      >
        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default CourseDetailPage;
