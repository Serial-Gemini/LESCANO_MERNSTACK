import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTeachers({ onAddTeacher }) {
  const [name, setName] = useState("");
  const [employeeNumber, setTeacherNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !employeeNumber || !gender) {
      alert("Please fill in all fields");
      return;
    }

    onAddTeacher({ name, employeeNumber, gender, specialization, department });
    navigate("/teachers");
  };

  return (
    <div className="page">
      <div className="form-container">
        <p>Teacher Management</p>
        <h1>Add Teacher</h1>
        <p>Fill out the form below</p>

        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter name"
            />
          </label>
              
          <label>
            Employee Number
            <input 
              type="text" 
              value={employeeNumber} 
              onChange={(e) => setTeacherNumber(e.target.value)} 
              placeholder="Enter Teacher Number" 
            />
          </label>

          <label>
            Department
            <input 
              type="text" 
              value={department} 
              onChange={(e) => setDepartment(e.target.value)} 
              placeholder="Enter Department" 
            />
          </label>
          
          <label>
            Gender
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>

          <label>
            <select value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
              <option value="" disabled>Select Specialization</option>
              <option value="Programming">Programming</option>
              <option value="Writing">Writing</option>
              <option value="Drawing">Drawing</option>
            </select>
          </label>

          <button type="submit">
            Add Teacher
          </button>
        </form>
      </div>
    </div>
  );
}