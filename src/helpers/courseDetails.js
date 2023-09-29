import React from 'react'

function courseDetails({ course, onClose }) {
    return (
      <div className="course-details-modal">
        <div className="modal-content">
          <h2>Course Details</h2>
          <p>Title: {course.title}</p>
          <p>Code: {course.course_id}</p>
          <p>Description: {course.description}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

export default courseDetails;