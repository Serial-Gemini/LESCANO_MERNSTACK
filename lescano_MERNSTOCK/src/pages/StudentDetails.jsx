import { useParams, Link } from "react-router-dom";
import students from "../data/students.json";

export default function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === parseInt(id)
  );

  if (!student) {
    return <h2>Student Not Found!</h2>;
  }

  return (
    <div>
      <h2>All da Details of {student.name}</h2>

      <p>
        <b>ID:</b> {student.id}
      </p>

      <p>
        <b>Age:</b> {student.age}
      </p>

      <p>
        <b>Student Number:</b> {student.studentNumber}
      </p>

      <p>
        <b>Course:</b> {student.course}
      </p>

      <Link to="/students">
        <button>Leave</button>
      </Link>
    </div>
  );
}