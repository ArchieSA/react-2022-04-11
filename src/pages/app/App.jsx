import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { MainLayout } from '../../features/layout/ui/main-layout/component';
import { ThemeContext } from "../../features/theme/context";
import { RestaurantsPage } from "../restaurants/component";
import { BasketPage } from "../basket/component";
import { NotFoundPage } from "../not-found/component";
import { ROUTES } from "../../consts/routes";
import { RestaurantContainer } from "../../features/restaurant/ui/restaurant/container";
import { DefaultRestaurantPage } from '../default-restaurant/component';
import { NotAllowedPage } from "../not-allowed/component";
import { AllMenuPageContainer } from '../all-menu/container';

export const App = () => {
  const [theme, setTheme] = useState(`dark`);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={ROUTES.Restaurants} element={<RestaurantsPage />}>
            <Route index element={<DefaultRestaurantPage />} />
            <Route path={ROUTES.Restaurant} element={<RestaurantContainer />} />
          </Route>
          <Route path={ROUTES.Basket} element={<BasketPage />} />
          <Route path={ROUTES.AllMenu} element={<AllMenuPageContainer />} />
        </Route>
        <Route path={ROUTES.NotAllowed} element={<NotAllowedPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </ThemeContext.Provider>
  );
};
