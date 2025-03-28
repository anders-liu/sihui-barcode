import React from "react"
import { AppDispatchContext } from "../context/AppContext"
import { makeIncCountAction } from "../actions/AppActions"

const useDispatch = () => React.useContext(AppDispatchContext)!

export function useDispatchIncCount(): (by: number) => void {
    const dispatch = useDispatch()
    return React.useCallback((by: number) => {
        const action = makeIncCountAction(by)
        dispatch(action)
    }, [dispatch])
}