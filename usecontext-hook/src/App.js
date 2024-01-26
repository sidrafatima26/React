import "./App.css";
import { createContext } from "react";
import Child1 from "./components/Child1";

const data1 = createContext();
const data2 = createContext();

export default function App() {
  const name = "Replit";
  const age = 13;
  return (
    <main>
      <data1.Provider value={name}>
        <data2.Provider value={age}>
          <Child1></Child1>
        </data2.Provider>
      </data1.Provider>
    </main>
  );
}
export { data1, data2 };
