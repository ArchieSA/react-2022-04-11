import { Header } from "../../../header/ui/header/component";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadData } from "../../module/thunks/load-data";
import { useEffect } from "react";

export const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(()=>dispatch(loadData()), []);
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
