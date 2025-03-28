import React from "react"
import { AppDispatchContext } from "../context/AppContext"
import { makeAddSourcePdfFileAction } from "../actions/AppActions"

const useDispatch = () => React.useContext(AppDispatchContext)!

export function useDispatchAddSourcePdfFile(): (key: string, file: File) => void {
    const dispatch = useDispatch()
    return React.useCallback((key: string, file: File) => {
        const action = makeAddSourcePdfFileAction(key, file)
        dispatch(action)
    }, [dispatch])
}