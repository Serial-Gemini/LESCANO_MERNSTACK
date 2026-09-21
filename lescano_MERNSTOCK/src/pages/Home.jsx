function Home({ students }) {
  return (
    
    <div>
      <div>
        <p>Student Management</p>

        <h1>Welcome</h1>

        <p>A Simple Management</p>
      </div>

      <div>
        <div>
          <h2>{students.length}</h2>
          <p>Total Students</p>
        </div>

        <div>
          <h2>2026</h2>
          <p>School Year</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
