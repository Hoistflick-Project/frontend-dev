import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/login/Login";
import Register from "./Pages/Register";
import "font-awesome/css/font-awesome.min.css";
import AboutPage from "./Pages/AboutPage";
import ScrollToTop from "./Utilities/ScrollToTop";
import Course_details from "./Pages/Course_details";
import StudentDashboard from "./Pages/StudentDashboard";
import Programs from "./Pages/Programs";
import ContactUSPage from "./Pages/ContactUSPage";
import Forgetpassword from "./Pages/Forgetpassword";
import CoursesPage from "./Pages/CoursesPage";
import Resources from "./Pages/resources/Resources";
import Eachresourcesdetails from "./Pages/resources/Eachresourcesdetails";
import Events from "./Pages/events/Events";
function App() {
  return (
    <div className="">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course_details" element={<Course_details />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<Eachresourcesdetails />} />
          <Route path="/contact-us" element={<ContactUSPage />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
