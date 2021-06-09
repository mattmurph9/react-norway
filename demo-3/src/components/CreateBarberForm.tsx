import { useState } from "react";

const CreateBarberForm = ({
  onSubmit,
}: {
  onSubmit: (barberName: string) => void;
}) => {
  const [barberInput, setBarberInput] = useState<string>("");

  return (
    <div>
      <h3>Add new barber</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBarberInput("");
          onSubmit(barberInput);
        }}
      >
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

export default CreateBarberForm;
