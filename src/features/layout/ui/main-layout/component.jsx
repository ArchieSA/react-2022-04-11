import { Header } from "../../../header/ui/header/component";
import { Outlet } from "react-router-dom";

export const MainLayout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);
