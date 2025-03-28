import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./components/App.tsx"
import { AppContextWrapper } from "./context/AppContext.tsx"

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppContextWrapper>
            <App />
        </AppContextWrapper>
    </React.StrictMode>
)
