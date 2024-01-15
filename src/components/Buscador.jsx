import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { consultarApi } from "../utilities/base-dato";
import Table from "react-bootstrap/esm/Table";
import "./Buscador.css";

function Buscador() {
  const [farmacia, setFarmacia] = useState("");
  const [comuna, setComuna] = useState("");
  const [data, setData] = useState([]);
  // Consultar la API una sola vez al renderizar los componentes
  useEffect(() => {
    consultarApi(setData);
  }, []);

  // INPUT Y FILTRADO POR FARMACIA
  const inputFarmacia = (e) => {
    setFarmacia(e.target.value);
  };
  const filtroFarmacia = data.filter(
    (farmacias) =>
      farmacias.local_nombre.toLowerCase() === farmacia.toLowerCase()
  );

  // INPUT Y FILTRADO POR COMUNA
  const inputComuna = (e) => {
    setComuna(e.target.value);
  };
  const filtroComuna = data.filter(
    (farmacias) =>
      farmacias.comuna_nombre.toLowerCase() === comuna.toLowerCase()
  );

  return (
    <>
      <section className="seccion-buscador">
        <h1>Buscador</h1>
        <InputGroup
          size="sm"
          className="mb-2 input-farmcia"
          value={farmacia}
          onChange={inputFarmacia}
        >
          <InputGroup.Text style={{ width: "5rem" }} id="inputGroup-sizing-sm">
            Farmacia
          </InputGroup.Text>
          <Form.Control
            placeholder="Ingrese nombre de la Farmacia"
            type="text"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup
          size="sm"
          className="mb-2 input-comuna"
          value={comuna}
          onChange={inputComuna}
        >
          <InputGroup.Text style={{ width: "5rem" }} id="inputGroup-sizing-sm">
            Comuna
          </InputGroup.Text>
          <Form.Control
            placeholder="Ingrese la Comuna"
            type="text"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </section>
      <section className="resultado-buscador">
        {farmacia ? (
          <Table striped bordered hover variant="dark">
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
              {filtroFarmacia.map((farmacia) => (
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
              ))}
            </tbody>
          </Table>
        ) : null}
        {comuna ? (
          <Table striped bordered hover variant="dark">
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
              {filtroComuna.map((farmacia) => (
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
              ))}
            </tbody>
          </Table>
        ) : null}
      </section>
    </>
  );
}

export default Buscador;
