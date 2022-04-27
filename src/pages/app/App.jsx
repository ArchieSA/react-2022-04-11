import React from "react";
import "./App.css";
import { Restaurants } from "../../features/restaurant/ui/restaurants/component";
import { Header } from "../../features/header/ui/header/component";

export const App = ({ restaurants }) => {
  return (
    <div>
      <Header />
      <main>
        <Restaurants restaurants={restaurants} />
      </main>
    </div>
  );
};
