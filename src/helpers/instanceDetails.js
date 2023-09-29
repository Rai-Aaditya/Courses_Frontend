import React from 'react';

function InstanceDetailsModal({ instance, onClose }) {
  return (
    <div className="instance-details-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose} style={{ cursor: 'pointer' }}>
          &times;
        </span>
        <h2>Instance Details</h2>
        <p>Year: {instance.year}</p>
        <p>Semester: {instance.semester}</p>
        <p>Course Title: {instance.course.title}</p>
        <p>Course ID: {instance.course.course_id}</p>
        {/* Add more details as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default InstanceDetailsModal;
