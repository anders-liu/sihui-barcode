import React from "react"
import { AppStateContext } from "../context/AppContext"

const useAppState = () => React.useContext(AppStateContext)!

//
// Selectors
//

export const useSourcePdfFiles = () => {
    const { sourcePdfFiles } = useAppState()
    return sourcePdfFiles
}

//
// Utils
//

export const useIsAllPending = (includeEmpty?: boolean) => {
    const sourcePdfFiles = useSourcePdfFiles()
    const total = Object.keys(sourcePdfFiles).length
    const pendings = Object.values(sourcePdfFiles).filter(f => f.status === "Pending").length
    return (total > 0 || includeEmpty) && total === pendings
}

export const useIsAllFinished = () => {
    const sourcePdfFiles = useSourcePdfFiles()
    const total = Object.keys(sourcePdfFiles).length
    const finished = Object.values(sourcePdfFiles).filter(f => f.status === "Done" || f.status === "Error").length
    return total > 0 && total === finished
}
