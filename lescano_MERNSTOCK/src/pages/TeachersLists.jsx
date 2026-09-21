import TeacherCards from "../components/teacherCards";

export default function TeachersLists({ teachers }) {
  return (
    <div>
      <div>
        <div>
          <p>TEACHERS</p>
          <h1>Teachers List</h1>
          <p>Here are the results</p>
        </div>
      </div>

      <div>
        {teachers.map((teacherItem) => (
          <TeacherCards key={teacherItem.id} teachers={teacherItem} />
        ))}
      </div>
    </div>
  );
}