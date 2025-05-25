import { Outlet } from "react-router-dom";
import Header from "@/components/Header.tsx";

const Layout = () => {
  return (
    <div className="w-full">
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Layout;
