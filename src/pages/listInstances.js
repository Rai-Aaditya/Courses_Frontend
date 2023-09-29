import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/listInstances.css';

function ListInstances() {
  const [instances, setInstances] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchInstances();
  }, []);

  const fetchInstances = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://127.0.0.1:8000/api/instances/');
      setInstances(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching instances:', error);
      setLoading(false);
    }
  };

  const handleDetailView = (instanceId) => {
    // Implement your logic to view instance details here
  };

  const handleDeleteInstance = async (instanceId) => {
    // Implement your logic to delete instance here
  };

  return (
    <div className="lsInstContainer">
      <table>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Year-Sem</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4">Loading instances...</td>
            </tr>
          ) : (
            instances.map((instance) => (
              <tr key={instance.id}>
                <td>{instance.course.title}</td>
                <td>{`${instance.year}-${instance.semester}`}</td>
                <td>{instance.course.course_id}</td>
                <td>
                  <button onClick={() => handleDetailView(instance.id)}>View Details</button>
                  <button onClick={() => handleDeleteInstance(instance.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListInstances;
