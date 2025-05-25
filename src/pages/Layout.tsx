import { Outlet } from "react-router-dom";
import Header from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { HeaderTitleProvider } from "@/contexts/headerTitle/HeaderTitleProvider.tsx";

const Layout = () => {
  return (
    <HeaderTitleProvider>
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-1 overflow-auto py-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HeaderTitleProvider>
  );
};

export default Layout;
