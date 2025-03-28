import React from "react"
import "./App.css"
import { SourcePdfFileSelector } from "./SourcePdfFileSelector"
import { AppStateContext } from "../context/AppContext"
import { SourcePdfFileList } from "./SourcePdfFileList"

export const App: React.FC = () => {
    // For debugging
    const appStateContext = React.useContext(AppStateContext);
    (window as any).__DBG__APP_STATE__ = appStateContext

    return (
        <div>
            <SourcePdfFileSelector />
            <SourcePdfFileList />
        </div>
    )
}
