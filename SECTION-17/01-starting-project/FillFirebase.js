import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MealList from "./components/Meals/MealList";
import MealsSummary from "./components/MealsSummary/MealsSummary";

function App() {
  const meals = [
    {
      id: "m1",
      title: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      amount: 1200,
    },
    {
      id: "m2",
      title: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      amount: 1200,
    },
    {
      id: "m3",
      title: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      amount: 1200,
    },
    {
      id: "m4",
      title: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      amount: 1200,
    },
  ];
  const addDataToFirebase = async ({ title, description, price, amount }) => {
    try {
      const response = await fetch(
        "https://react-http-cb3c6-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description: description,
            price: price,
            amount: amount,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    meals.forEach((el) => {
      setTimeout(() => {
        addDataToFirebase(el);
      }, 2000);
    });
  }, []);
  return (
    <>
      <Header />
      <MealsSummary />
      <MealList />
    </>
  );
}

export default App;
