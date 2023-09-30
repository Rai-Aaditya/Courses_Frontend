import React, { useState } from 'react';
import axios from 'axios';
import '../styles/listInstances.css';
import InstanceDetailsModal from '../helpers/instanceDetails';

function ListInstances() {
  const [instances, setInstances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedInstance, setSelectedInstance] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');

  const fetchInstances = async (year, semester) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://127.0.0.1:8000/api/instances/${year}/${semester}/`);
      setInstances(response.data);
    } catch (error) {
      console.error('Error fetching instances:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDetailView = (courseId) => {
    const selectedInstance = instances.find((instance) => instance.course_id === courseId);
    setSelectedInstance(selectedInstance);
    setIsModalOpen(true);
  };

  const handleDeleteInstance = async (courseId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/instances/${year}/${semester}/${courseId}`);
      // Filter out the deleted instance from the list
      setInstances((prevInstances) => prevInstances.filter((instance) => instance.course_id !== courseId));
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error deleting instance:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure both year and semester are provided before fetching instances
    if (year && semester) {
      await fetchInstances(year, semester);
    }
  };

  return (
    <div className="lsInstContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="year"
          placeholder="Enter Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          name="semester"
          placeholder="Enter Semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        />
        <button className="bg-primary button" type="submit">
          List Instances
        </button>
      </form>
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
          ) : instances.map((instance) => (
            <tr key={instance.course_id}>
              <td>{instance.course_title}</td>
              <td>{`${instance.course_year}-${instance.course_semester}`}</td>
              <td>{instance.course_id}</td>
              <td>
                <button onClick={() => handleDetailView(instance.course_id)}>View Details</button>
                <button onClick={() => handleDeleteInstance(instance.course_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <InstanceDetailsModal instance={selectedInstance} onClose={closeModal} />
      )}
    </div>
  );
}

export default ListInstances;
