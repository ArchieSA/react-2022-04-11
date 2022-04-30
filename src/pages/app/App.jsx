import React from "react";
import "./App.css";
import { Header } from "../../features/header/ui/header/component";
import { ThemeContext } from "../../features/theme/context";
import { RestaurantsContainer } from "../../features/restaurant/ui/restaurants/container";

export const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <Header />
        <main>
          <ThemeContext.Provider value="light">
            <RestaurantsContainer />
          </ThemeContext.Provider>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};
