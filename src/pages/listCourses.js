import React, { useState } from 'react';
import axios from 'axios';
import '../styles/listCourses.css';
import CourseDetailsModal from '../helpers/courseDetails';

function ListCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://127.0.0.1:8000/api/courses/');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDetailView = (course) => {
    setSelectedCourse(course);
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/courses/${courseId}/delete/`);
      setCourses((prevCourses) => prevCourses.filter((course) => course.course_id !== courseId));
      setSelectedCourse(null); // Close the modal
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchCourses();
  };

  return (
    <div className="lsCrsContainer">
      <form onSubmit={handleSubmit}>
        <button className="bg-primary button" type="submit">
          List Courses
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="3">Loading courses...</td>
            </tr>
          ) : (
            courses.map((course) => (
              <tr key={course.course_id}>
                <td>{course.title}</td>
                <td>{course.course_id}</td>
                <td>
                  <button onClick={() => handleDetailView(course)}>View Details</button>
                  <button onClick={() => handleDeleteCourse(course.course_id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {selectedCourse && (
        <CourseDetailsModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}



export default ListCourses;
