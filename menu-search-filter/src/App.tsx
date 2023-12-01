import { useState } from "react";
import "./App.css";
import DisplayFood from "./components/DisplayFood";
import SearchBar from "./components/SearchBar";
import { foods } from "./foods";
import { Food } from "./types";

function App() {
  const [text, setText] = useState("");

  function filteredFoods() {
    let filteredMenu: Food[] = [];
    if (text != "") {
      filteredMenu = foods.filter((food) => {
        return food.name.toLowerCase().match(text.toLowerCase());
      });
    }
    return filteredMenu;
  }

  function returnFilteredFoods() {
    if (text.length == 0) return foods;
    else return filteredFoods();
  }

  return (
    <>
      <SearchBar text={text} setText={setText} />
      {returnFilteredFoods().map((item) => (
        <DisplayFood
          name={item.name}
          description={item.description}
          id={item.id}
          key={item.id}
          searchSubstring={text}
        />
      ))}
    </>
  );
}

export default App;
