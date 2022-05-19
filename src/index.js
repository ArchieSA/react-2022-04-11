import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./root-module";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RestaurantsPage } from "./pages/restaurants/container";
import { BasketPage } from "./pages/basket/component";
import { MainLayout } from "./features/layout/ui/main-layout/component";
import { ROUTES } from "./constants/routes";
import { RestaurantContainer } from "./features/restaurant/ui/restaurant/container";
import { NotFoundPage } from "./pages/not-found/component";
import { DefaultRestaurantPage } from "./pages/default-restaurant/component";
import { NotAllowed } from "./pages/not-alowed/component";
import { ProductsPage } from "./pages/products/component";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={ROUTES.Restaurants} element={<RestaurantsPage />}>
            <Route index element={<DefaultRestaurantPage />} />
            <Route path={ROUTES.Restaurant} element={<RestaurantContainer />} />
          </Route>
          <Route path={ROUTES.Basket} element={<BasketPage />} />
          <Route path={ROUTES.Products} element={<ProductsPage />} />
        </Route>
        <Route path={ROUTES.NotAllowed} element={<NotAllowed />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
