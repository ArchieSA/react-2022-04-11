import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../../header/ui/header/component";


export const MainLayout = () => {

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}