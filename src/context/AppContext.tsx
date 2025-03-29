import React from "react"
import { type AppAction } from "../actions/AppActions"
import { rootReducer } from "../reducers/rootReducer"
import { type AppState, defaultAppState } from "../states/AppState"

const dispatchRef = React.createRef<React.ActionDispatch<[action: AppAction]>>()

export const AppStateContext = React.createContext<AppState | null>(null)

export const dispatchAppAction = (action: AppAction) => dispatchRef.current?.(action)

export const AppContextWrapper: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [appState, dispatch] = React.useReducer(rootReducer, defaultAppState)
    dispatchRef.current = dispatch

    return (
        <AppStateContext.Provider value={appState}>
            {children}
        </AppStateContext.Provider>
    )
}