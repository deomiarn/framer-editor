import { Outlet } from "react-router-dom";
import { HeaderTitleProvider } from "@/contexts/headerTitle/HeaderTitleProvider.tsx";
import { Header } from "@/layout/Header.tsx";
import { Footer } from "@/layout/Footer.tsx";

const Layout = () => {
  return (
    <HeaderTitleProvider>
      <div className="min-h-screen flex flex-col relative p-4 gap-4">
        <Header />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HeaderTitleProvider>
  );
};

export default Layout;
