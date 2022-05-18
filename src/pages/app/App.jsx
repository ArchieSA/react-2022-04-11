import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { MainLayout } from '../../features/layout/ui/main-layout/component';
import { ThemeContext } from "../../features/theme/context";
import { RestaurantsPage } from "../restaurants/component";
import { BasketPage } from "../basket/component";
import { NotFoundPage } from "../not-found/component";


export const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeContext.Provider value="light">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path='restaurants' element={<RestaurantsPage />} />
            <Route path='basket' element={<BasketPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </ThemeContext.Provider>
    </ThemeContext.Provider>
  );
};
