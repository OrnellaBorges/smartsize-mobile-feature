import { useState } from "react";
import "./App.css";
import "./reset.css";
import CustomSelect from "./components/CustomSelect";

function App() {
  const [selectedFruit, setSelectedFruit] = useState<string>("banana");

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  return (
    <div className="App">
      <main className="main">
        <header className="header">
          <h1 className="title title-1">Size Guide</h1>
          <div className="select-wrapper">
            <CustomSelect
              options={options}
              value={selectedFruit}
              defaultValue="banana"
            />
          </div>
        </header>
      </main>
    </div>
  );
}

export default App;
