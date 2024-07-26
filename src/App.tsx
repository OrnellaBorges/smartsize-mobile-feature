import { useState } from "react";
import "./App.css";
import "./reset.css";
import CustomSelect from "./components/CustomSelect";

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
      <main className="main">
        <header className="header">
          <h1 className="title title-1">Size Guide</h1>
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
      </main>
    </div>
  );
}

export default App;
