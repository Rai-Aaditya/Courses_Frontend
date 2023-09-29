import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../styles/addCourse.css';

function AddCourseForm() {
  const [formData, setFormData] = useState({
    title: '',
    course_id: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/courses/', formData);
      // Handle success, reset the form, or redirect as needed
      console.log('Course added:', response.data);
      setFormData({ title: '', course_id: '', description: '' });
    } catch (error) {
      // Handle error, show error message, etc.
      console.error('Error adding course:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="crtCrsContainer">
      <Form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Course title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="number"
          name="course_id"
          placeholder="Course code"
          value={formData.course_id}
          onChange={handleChange}
        />
        <textarea
          name="description"
          cols="30"
          rows="3"
          placeholder="Course description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <Button variant="primary" type="submit">
          Add course
        </Button>
      </Form>
    </div>
  );
}

export default AddCourseForm;
