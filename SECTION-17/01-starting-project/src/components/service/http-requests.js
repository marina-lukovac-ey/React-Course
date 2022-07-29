export const getMealsFromDB = async (getMealsList) => {
  try {
    const response = await fetch(
      "https://react-http-cb3c6-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    );
    const data = await response.json();
    getMealsList(data);
  } catch (error) {
    console.log(error);
  }
};
