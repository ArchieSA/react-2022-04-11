import React from "react";
import "./App.css";
import { Header } from "../../features/header/ui/header/component";
import { ThemeContext } from "../../features/theme/context";
import { RestaurantsContainer } from "../../features/restaurant/ui/restaurants/container";
import { BasketContainer } from '../../features/basket/ui/basket/container';
import { Route } from "../../features/custom-routing/ui/route/container";

export const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <Header />
        <main>
          <ThemeContext.Provider value="light">
            <Route route={`restaurant`}>
              <RestaurantsContainer />
            </Route>
            <Route route={`basket`}>
              <BasketContainer />
            </Route>
          </ThemeContext.Provider>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};
