import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { consultarApi } from "../utilities/base-dato";
import "./MiApi.css";

function MiApi() {
  const [data, setData] = useState([]);
  // Consultar la API una sola vez al renderizar los componentes
  useEffect(() => {
    consultarApi(setData);
  }, []);

  return (
    <div className="tabla-resultado">
      <Table striped bordered hover variant="dark" size="lg">
        <thead>
          <tr>
            <th>Farmacia</th>
            <th>Region</th>
            <th>Comuna</th>
            <th>Direccion</th>
            <th>Apertura</th>
            <th>Cierre</th>
            <th>Telefono</th>
            <th>Turno Dia</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0
            ? data.map((farmacia) => {
                return (
                  <tr key={farmacia.local_id}>
                    <td>{farmacia.local_nombre}</td>
                    <td>{farmacia.fk_region}</td>
                    <td>{farmacia.comuna_nombre}</td>
                    <td>{farmacia.local_direccion}</td>
                    <td>{farmacia.funcionamiento_hora_apertura}</td>
                    <td>{farmacia.funcionamiento_hora_cierre}</td>
                    <td>{farmacia.local_telefono}</td>
                    <td>{farmacia.funcionamiento_dia}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </div>
  );
}

export default MiApi;
