import "./App.css";
import BarbersList from "./components/BarbersList";
import AddClientToBarberForm from "./components/AddClientToBarberForm";
import {
  useGetBarbersQuery,
  useCreateClientMutation,
  useAddClientToBarberMutation,
  useCreateBarberMutation,
} from "./codegen/hooks";
import CreateBarberForm from "./components/CreateBarberForm";

function App() {
  const {
    data: barbersData,
    loading: barbersLoading,
    error: barbersError,
    refetch: refetchBarbers,
  } = useGetBarbersQuery();

  const [createBarberMutation] = useCreateBarberMutation();

  const [createClientMutation] = useCreateClientMutation();

  const [addClientToBarberMutation] = useAddClientToBarberMutation();

  const handleAddClientClick = async (
    barberName: string,
    clientName: string
  ) => {
    await createClientMutation({ variables: { name: clientName } });
    await addClientToBarberMutation({
      variables: { barberName, clientName },
    });
    refetchBarbers();
  };

  const handleCreateBarber = async (name: string) => {
    await createBarberMutation({ variables: { name } });
    refetchBarbers();
  };

  if (barbersLoading) {
    return <h2>Loading...</h2>;
  }

  if (barbersError) {
    return <h2>Error, try refresh</h2>;
  }

  const barbers = barbersData && barbersData.barbers ? barbersData.barbers : [];

  return (
    <div>
      <header>
        <h1>Matt's Codegen Barbershop</h1>
      </header>
      <div className="content">
        <BarbersList barbers={barbers} />
        <div>
          <CreateBarberForm onSubmit={handleCreateBarber} />
          <AddClientToBarberForm onSubmit={handleAddClientClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
