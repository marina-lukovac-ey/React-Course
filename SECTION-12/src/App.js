import { useState, useCallback } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("app running");
  const toggleParagraphVisibility = useCallback(() => {
    // when creating a functiono useCallback binds the value of allowtogle to false
    //result: whenever a function is called, this value remains the same regardles of the state change
    if (allowToggle) {
      setShowParagraph((prev) => !prev);
    }
  }, [allowToggle]); //but if allowToggle is added to dependency array, it is being recreated each time its state changes
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphVisibility}>
        Toggle Paragraph
        {/* {showParagraph ? "Hide Paragraph" : "Show Paragraph"} */}
      </Button>
    </div>
  );
}

export default App;
