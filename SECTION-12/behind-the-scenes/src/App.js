import { useState, useCallback, useMemo } from "react";
import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("This is a list");
  const [counter, setCounter] = useState(1);
  const changeTitleHandler = useCallback(() => {
    setCounter((prev) => prev + 1);
    setListTitle("New Title" + counter);
  }, []);
  console.log("APP");
  console.log(counter);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={useMemo(() => [5, 3, 1, 10, 9], [])} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
