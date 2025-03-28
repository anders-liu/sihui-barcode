import React from "react"
import { AppStateContext } from "../context/AppContext"

const useAppState = () => React.useContext(AppStateContext)!

export const useCount = () => {
    const { count } = useAppState()
    return count
}