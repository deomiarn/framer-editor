import { Outlet } from "react-router-dom";
import Header from "@/layout/Header.tsx";
import { Footer } from "@/layout/Footer.tsx";
import { HeaderTitleProvider } from "@/contexts/headerTitle/HeaderTitleProvider.tsx";

const Layout = () => {
  return (
    <HeaderTitleProvider>
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-1 overflow-auto py-20 p-2">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HeaderTitleProvider>
  );
};

export default Layout;
