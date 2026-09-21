import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StudentsLists from "./pages/StudentsLists";
import AddStudents from "./pages/AddStudents";
import Navbar from "./components/Navbar";
import initialStudents from "./data/students.json";
import AddTeachers from "./pages/AddTeacher";
import initialTeachers from "./data/teachers.json";
import TeachersLists from "./pages/TeachersLists";
import "./components/Navbar.css"

import "./index.css"

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [teachers, setTeachers] = useState(initialTeachers);

  // Function to add a new student to the state
  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [
      ...prevStudents,
      { id: Date.now(), ...newStudent },
    ]);
  };

  const handleAddTeacher = (newTeacher) => {
    setTeachers((prevTeachers) => [
      ...prevTeachers,
      { id: Date.now(), ...newTeacher },
    ]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home students={students} />} />
        <Route path="/students" element={<StudentsLists students={students} />} />
        <Route path="/teachers" element={<TeachersLists teachers={teachers} />} />

        <Route path="/add-student" element={<AddStudents onAddStudent={handleAddStudent} />} />
        <Route path="/add-teacher" element={<AddTeachers onAddTeacher={handleAddTeacher} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;