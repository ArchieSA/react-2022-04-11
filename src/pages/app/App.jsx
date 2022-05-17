import React from "react";
import "./App.css";
import { Header } from "../../features/header/ui/header/component";
import { ThemeContext } from "../../features/theme/context";
import { RestaurantsContainer } from "../../features/restaurant/ui/restaurants/container";
import { BrowserRoute } from "../../features/route/ui/container";
import { BasketContainer } from "../../features/basket/ui/basket/container";

export const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <Header />
        <main>
          <BrowserRoute>
            <RestaurantsContainer route="/restraunts" />
            <BasketContainer route="basket" className={""} />
          </BrowserRoute>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};
