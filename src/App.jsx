import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route from React Router DOM
import HomePage from './components/Home/Home';
import CourseDetailPage from './components/CourseDetail/CourseDetail'; // Import the CourseDetailPage component
import Navbar from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import MyCoursesPage from './components/Dashboard/MyCourses';
function App() {

  return (
    <Router>
      <div>
        <Navbar />
          {/* Define your routes */}
          <Routes>
          <Route path="/" exact element={<HomePage/>} /> 
          <Route path="/course/:id" element={<CourseDetailPage/>} /> 
          <Route path="/mycourses" element={<MyCoursesPage/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
