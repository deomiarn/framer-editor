import { framer } from "framer-plugin"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentsOverview from "@/pages/ComponentsOverview.tsx";
import ColorsOverview from "@/pages/ColorsOverview.tsx";
import TypographyOverview from "@/pages/TypographyOverview.tsx";
import Home from "@/pages/Home.tsx";
import Layout from "@/pages/Layout.tsx";

framer.showUI({
    position: "top left",
    width: 350,
    height: 600,
    resizable: false
})

export function App() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Layout /> }>
                        <Route index element={ <Home /> } />
                        <Route path="components" element={ <ComponentsOverview /> } />
                        <Route path="typography" element={ <TypographyOverview /> } />
                        <Route path="colors" element={ <ColorsOverview /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}
