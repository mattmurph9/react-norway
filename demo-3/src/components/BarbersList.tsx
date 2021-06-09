import { Barber, Client } from "../codegen/types";

const BarbersList = ({ barbers }: { barbers: Array<Barber | null> }) => (
  <div>
    <h2>Barbers</h2>
    <ul>
      {barbers.map((barber) => (
        <li key={barber!.name}>
          <h3>{`Barber name: ${barber!.name}`}</h3>
          <h4>Clients:</h4>
          <ul>
            {barber?.clients.map((client: Client) => (
              <li key={client.name}>{client.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default BarbersList;
