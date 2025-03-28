import React from "react"
import { AppStateContext } from "../context/AppContext"

const useAppState = () => React.useContext(AppStateContext)!

export const useSourcePdfFiles = () => {
    const { sourcePdfFiles } = useAppState()
    return sourcePdfFiles
}