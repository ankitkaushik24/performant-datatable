import "./App.css";
import Table from "./table/Table";
import { useSignal } from "@preact/signals-react";

function App() {
  const count = useSignal(0);

  console.log("App rendered");

  return (
    <>
      <h1>Signal + React DataTable</h1>
      <div className="card">
        <button onClick={() => count.value++}>count is {count}</button>
      </div>
      <Table />
    </>
  );
}

export default App;
