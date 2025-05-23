import { framer } from "framer-plugin"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Components from "@/pages/ComponentsOverview.tsx";

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
                    <Route path="/" element={ <Components /> } />
                </Routes>
            </BrowserRouter>
        </main>
    )
}
