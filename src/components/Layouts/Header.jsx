import { Link } from "react-router-dom";
function Navbar() {
    return (
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            Courshala
          </Link>
          <Link to="/mycourses">
            <button className="bg-white text-blue-600 rounded-full px-4 py-2 font-semibold hover:bg-blue-200">
              My Courses
            </button>
          </Link>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  