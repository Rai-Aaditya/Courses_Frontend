import React from 'react';

function InstanceDetailsModal({ instance, onClose }) {
  // Check if 'instance' is defined before accessing its properties
  if (!instance) {
    return (
      <div className="instance-details-modal">
        <div className="modal-content">
          <span className="close" onClick={onClose} style={{ cursor: 'pointer' }}>
            &times;
          </span>
          <h2>Instance Details</h2>
          <p>Loading...</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <div className="instance-details-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose} style={{ cursor: 'pointer' }}>
          &times;
        </span>
        <h2>Instance Details</h2>
        <p>Course Id: {instance.course_id}</p>
        <p>Course Title: {instance.course_title}</p>
        <p>Year: {instance.course_year}</p>
        <p>Semester: {instance.course_semester}</p>
        {/* Check if 'instance.course' is defined before accessing its properties */}
        {instance.course && (
          <div>
            <p>Course Title: {instance.course.title}</p>
            <p>Course ID: {instance.course.course_id}</p>
          </div>
        )}
        {/* Add more details as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}


export default InstanceDetailsModal;
