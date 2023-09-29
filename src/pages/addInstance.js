import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../styles/addInstance.css';

function AddInstance() {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseOptions, setCourseOptions] = useState([]); // To store course data from the backend

  useEffect(() => {
    // Fetch course data from the backend when the component mounts
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/courses/'); // Adjust the URL as needed
        const courses = response.data;

        // Populate courseOptions with the course titles and IDs
        setCourseOptions(courses.map((course) => ({
          value: course.course_id, // Use the course ID as the value
          label: course.title,
        })));
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!year || !semester || !selectedCourse) {
      console.error('Please fill in all fields.');
      return;
    }

    const data = {
      year: parseInt(year), // Convert to integer
      semester: parseInt(semester), // Convert to integer
      course: parseInt(selectedCourse), // Convert to integer
    };

    try {
      await axios.post('http://127.0.0.1:8000/api/instances/add/', data);
      console.log('Instance added successfully');
      // Clear input fields after successful submission
      setYear('');
      setSemester('');
      setSelectedCourse('');
    } catch (error) {
      console.error('Error adding instance:', error);
    }
    window.location.reload();
  };

  return (
    <div className="crtInstContainer">
      <Form className="form" onSubmit={handleSubmit}>
        <div className="selectCrs">
          <Form.Select
            style={{ border: 'none', color: 'grey' }}
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select course</option>
            {courseOptions.map((course) => (
              <option key={course.value} value={course.value}>
                {course.label}
              </option>
            ))}
          </Form.Select>
          <Button variant="primary" type="button" onClick={(e)=>{
            window.location.reload();
          }}>
            Refresh
          </Button>
        </div>
        <div className="selectAtrb">
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            type="number"
            name="semester"
            placeholder="Semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
        </div>
        <Button variant="primary" type="submit">
          Add Instance
        </Button>
      </Form>
    </div>
  );
}

export default AddInstance;
