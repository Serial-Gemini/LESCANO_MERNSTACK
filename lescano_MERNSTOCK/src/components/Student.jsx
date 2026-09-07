import { Link } from "react-router-dom";

export default function Student({ student }) {

  return (

    <div>
      <h3>{student.name}</h3>
        <p>Student No: {student.studentNumber}</p>
        <p>Course: {student.course}</p>
      <Link to={ '/students/$(student.id)'}>
        <button>
          View
        </button>
      </Link>
    </div>
  );
}