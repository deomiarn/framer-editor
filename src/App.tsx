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
    <>
      <div
        className="
    fixed inset-0 -z-10
    bg-gradient-to-br
    from-[#b1c8db] via-[#7fa5c7] to-[#3f729f]
    bg-fixed
  "
      />

      {/* eigentliche App-Shell */}
      <main className="relative flex flex-col min-h-screen text-white">
        <BrowserRouter>
          <Routes>
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
    </>
  );
}
