import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudents({ onAddStudent }) {
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !studentNumber || !gender) {
      alert("Please fill in all fields");
      return;
    }

    onAddStudent({ name, studentNumber, gender });
    navigate("/students"); // Redirect to the list after adding
  };

  return (
    <div className="page">
      <div className="form-container">
        <p>Student Management</p>
        <h1>Add Student</h1>
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
            Student Number
            <input 
              type="text" 
              value={studentNumber} 
              onChange={(e) => setStudentNumber(e.target.value)} 
              placeholder="Enter Student Number" 
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

          <button type="submit">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}