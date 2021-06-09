import { useState } from "react";

const AddClientToBarberForm = ({
  onSubmit,
}: {
  onSubmit: (barberName: string, clientName: string) => void;
}) => {
  const [barberInput, setBarberInput] = useState<string>("");
  const [clientInput, setClientInput] = useState<string>("");

  return (
    <div>
      <h3>Add client to barber</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBarberInput("");
          setClientInput("");
          onSubmit(barberInput, clientInput);
        }}
      >
        <label>Client: </label>
        <input
          type="text"
          value={clientInput}
          onChange={(e) => setClientInput(e.target.value)}
        />
        <br />
        <br />
        <label>Barber: </label>
        <input
          type="text"
          value={barberInput}
          onChange={(e) => setBarberInput(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddClientToBarberForm;
