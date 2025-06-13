import { framer } from "framer-plugin";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentsOverview from "@/pages/ComponentsOverview.tsx";
import ColorsOverview from "@/pages/ColorsOverview.tsx";
import TypographyOverview from "@/pages/TypographyOverview.tsx";
import Home from "@/pages/Home.tsx";
import Layout from "@/layout/Layout.tsx";
import SectionsOverview from "./pages/SectionsOverview";
import RegisterPage from "@/pages/auth/RegisterPage.tsx";
import LoginPage from "@/pages/auth/LoginPage.tsx";
import VerifyEmailPage from "@/pages/auth/VerifyEmailPage.tsx";

framer.showUI({
  position: "top left",
  width: 350,
  height: 600,
  resizable: false
});

export function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />

          <Route path="/auth">
            <Route path="verify-email" element={<VerifyEmailPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
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
