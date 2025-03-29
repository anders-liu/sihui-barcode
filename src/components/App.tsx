import React from "react"
import "./App.css"
import { SourcePdfFileSelector } from "./SourcePdfFileSelector"
import { AppStateContext } from "../context/AppContext"
import { SourcePdfFileList } from "./SourcePdfFileList"
import { RunButton } from "./RunButton"
import { ResetButton } from "./ResetButton"

export const App: React.FC = () => {
    // For debugging
    const appStateContext = React.useContext(AppStateContext);
    (window as any).__DBG__APP_STATE__ = appStateContext

    return (
        <div>
            <SourcePdfFileSelector />
            <SourcePdfFileList />
            <RunButton />
            <ResetButton />
        </div>
    )
}
