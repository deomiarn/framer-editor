import { Outlet } from "react-router-dom";
import Header from "@/components/navigation/Header.tsx";
import { Footer } from "@/components/navigation/Footer.tsx";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
