import "./App.css";
import BarbersList from "./components/BarbersList";
import AddClientToBarberForm from "./components/AddClientToBarberForm";

function App() {

  const handleAddClientClick = async (
    barberName: string,
    clientName: string
  ) => {

  };

  return (
    <div>
      <header>
        <h1>Matt's Codegen Barbershop</h1>
      </header>
      <div className="content">
        <BarbersList barbers={[]} />
        <AddClientToBarberForm onSubmit={handleAddClientClick} />
      </div>
    </div>
  );
}

export default App;
