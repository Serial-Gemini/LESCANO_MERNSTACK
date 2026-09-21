function Teachercards({ teachers }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", display: "flex", gap: "15px" }}>
      <div style={{ width: "40px", height: "40px", background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontWeight: "bold" }}>
        {teachers.name ? teachers.name.charAt(0) : "?"}
      </div>

      <div>
        <h3>{teachers.name}</h3>
        <p>
          <span>Employee Number: </span>
          {teachers.employeeNumber}
        </p>
        <p>
          <span>Gender: </span>
          {teachers.gender}
        </p>
        <p>
          <span>Sepcialization: </span>
          {teachers.specialization}
        </p>
        <p>
          <span>Departmenet: </span>
          {teachers.department}
        </p>
      </div>
    </div>
  );
}

export default Teachercards;