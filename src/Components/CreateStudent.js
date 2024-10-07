import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const CreateStudent = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    class: ""
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:4000/students", data)
    .then(res =>{
        alert("Student added Succesfully");
        history.push('/');
        toast.success("Student added succesfully", {
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000,
        })
    })
    .catch(err =>{
        alert("There was an error while adding the student")
        toast.error("error occured while adding the student",{
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000,
        })
    })
}

  return (
    <div className="create-student">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
        <input type="text" name="course" placeholder="Course" onChange={handleChange} required />
        <input type="text" name="class" placeholder="Class" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default CreateStudent;
