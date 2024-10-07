import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    class: ""
  });

  useEffect(() => {
    axios.get('http://localhost:4000/students/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:4000/students/' + id, data)
      .then(() => {
        alert('Student updated successfully');
        history.push('/');
      })
      .catch(() => alert('Error occurred while updating student'));
  };

  return (
    <div className="edit-student">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={data.name} onChange={handleChange} required />
        <input type="email" name="email" value={data.email} onChange={handleChange} required />
        <input type="text" name="phone" value={data.phone} onChange={handleChange} required />
        <input type="text" name="course" value={data.course} onChange={handleChange} required />
        <input type="text" name="class" value={data.class} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditStudent;
