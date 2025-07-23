import { framer } from "framer-plugin";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentsOverview from "@/pages/ComponentsOverview.tsx";
import ColorsOverview from "@/pages/ColorsOverview.tsx";
import TypographyOverview from "@/pages/TypographyOverview.tsx";
import Home from "@/pages/Home.tsx";
import Layout from "@/layout/Layout.tsx";
import { SectionsOverview } from "./pages/SectionsOverview";
import RegisterPage from "@/pages/auth/RegisterPage.tsx";
import VerifyEmailPage from "@/pages/auth/VerifyEmailPage.tsx";

framer.showUI({
  position: "top left",
  width: 350,
  height: 600,
  resizable: false
});

export function App() {
  return (
    <main className="flex flex-col bg-gradient-to-br from-[#3a5876] via-[#3e6a8f] to-[#447aa8] text-white">
      <BrowserRouter>
        <Routes>
          {/*<Route index element={<LoginPage />} />*/}

          <Route path="/auth">
            <Route path="verify-email" element={<VerifyEmailPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sections" element={<SectionsOverview />} />
            <Route path="components" element={<ComponentsOverview />} />
            <Route path="typography" element={<TypographyOverview />} />
            <Route path="colors" element={<ColorsOverview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
