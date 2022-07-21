import "./App.css";
import Header from "./components/Header/Header";
import MealList from "./components/Meals/MealList";
import MealsSummary from "./components/MealsSummary/MealsSummary";
//Abandoned version
function App() {
  return (
    <>
      <Header />
      <MealsSummary />
      <MealList />
    </>
  );
}

export default App;
