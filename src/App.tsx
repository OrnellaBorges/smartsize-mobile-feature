import { useState } from "react";
import "./App.css";
import "./reset.css";
import CustomSelect from "./components/CustomSelect";
import TableComponent from "./components/TableComponent";

function App() {
  const [selectedFruit, setSelectedFruit] = useState<string>("Banana");
  const [selectedUnit, setSelectedUnit] = useState<string>("CM");

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  const unitsOptions = [
    { value: "cm", label: "CM" },
    { value: "in", label: "IN" },
  ];

  const units = [{ cm: "CM" }, { in: "IN" }];

  return (
    <div className="App">
      <header className="header">
        <h1 className="title title-1">FEATURE SIZE GUIDE</h1>
        <div className="select-wrapper">
          <p>Options :</p>
          <div className="selectButtons-container">
            <CustomSelect
              options={options}
              value={selectedFruit}
              defaultValue={selectedFruit}
              onChangeSelect={setSelectedFruit}
            />

            <CustomSelect
              options={unitsOptions}
              value={selectedUnit}
              defaultValue={selectedUnit}
              onChangeSelect={setSelectedUnit}
            />
          </div>
        </div>
      </header>
      <main className="main">
        {/* Contenu principal */}
        <section className="section">
          <div className="section-header">
            <h2 className="title title-2">Mensurations</h2>
            <p className="link-info">Comment mesurer les mensurations</p>
          </div>

          <TableComponent />
        </section>
      </main>
    </div>
  );
}

export default App;
