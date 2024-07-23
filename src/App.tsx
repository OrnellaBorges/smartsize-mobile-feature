import "./App.css";
import "./reset.css";

function App() {
  const options = [
    { value: "apple", label: "Pomme" },
    { value: "banana", label: "Banane" },
    { value: "orange", label: "Orange" },
  ];

  return (
    <div className="App">
      <main className="main">
        <header className="header">
          <h1 className="title title-1">Size Guide</h1>
          <div className="select-wrapper">
            <label className="label" htmlFor="">
              Options
              <select
                defaultValue="apple"
                className="select"
                name="selectedFruit"
              >
                <option value="apple">A</option>
                <option value="banana">B</option>
                <option value="orange">Orange</option>
                <option value="orange">Orangefvdsgs</option>
                <option value="orange">treslonguephraseeeeeeeee</option>
              </select>
            </label>
          </div>
        </header>
      </main>
    </div>
  );
}

export default App;
