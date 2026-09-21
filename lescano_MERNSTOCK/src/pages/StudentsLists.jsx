import Cards from "../components/cards";

export default function StudentsLists({ students }) {
  return (
    <div>
      <div>
        <div>
          <p>STUDENTS</p>
          <h1>Student List</h1>
          <p>Here are the results</p>
        </div>
      </div>

      <div>
        {students.map((studentItem) => (
          <Cards key={studentItem.id} student={studentItem} />
        ))}
      </div>
    </div>
  );
}