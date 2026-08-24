import StudentCard from "./components/studentcard.jsx";

function App() {
  return (
    // Centered layout with a dark, modern background
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6">
      
      {/* Container header */}
      <h1 className="text-3xl font-extrabold text-white mb-8 tracking-tight">
        Student Directory
      </h1>

      {/* Renders a single card with all details passed correctly */}
      <StudentCard 
        name="Lescano" 
        age={20} 
        bday="02/09/2006" 
        studName="SerialGemini" 
        course="BSIT" 
      />

    </div>
  );
}

export default App;
