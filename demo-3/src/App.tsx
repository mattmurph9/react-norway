import "./App.css";
import BarbersList from "./components/BarbersList";
import AddClientToBarberForm from "./components/AddClientToBarberForm";
import { useAddClientToBarberMutation, useCreateClientMutation, useGetBarbersQuery } from "./codegen/hooks";

function App() {
  const { data, loading, error, refetch } = useGetBarbersQuery();

  const [createClientMutation] = useCreateClientMutation();
  const [addClientToBarberMutation] = useAddClientToBarberMutation();

  const handleAddClientClick = async (
    barberName: string,
    clientName: string
  ) => {
    await createClientMutation({ variables: { name: clientName } });
    await addClientToBarberMutation({ variables: { clientName, barberName } });
    refetch();

  };

  if (loading) {
    return <h3>Loading...</h3>
  }

  if (error) {
    return <h3>Error, try refresh</h3>
  }

  return (
    <div>
      <header>
        <h1>Matt's Codegen Barbershop</h1>
      </header>
      <div className="content">
        <BarbersList barbers={data?.barbers || []} />
        <AddClientToBarberForm onSubmit={handleAddClientClick} />
      </div>
    </div>
  );
}

export default App;
