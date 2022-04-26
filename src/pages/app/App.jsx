import React, { useState } from "react";
import "./App.css";
import { Restaurants } from "../../features/restaurant/ui/restaurants/component";
import { Header } from "../../features/header/ui/header/component";
import { ThemeContext } from "../../features/theme/context";

export const App = ({ restaurants }) => {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <Header />
        <main>
          <ThemeContext.Provider value="light">
            <Restaurants restaurants={restaurants} />
          </ThemeContext.Provider>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};
