import React from "react"
import { AppAction } from "../actions/AppActions"
import { rootReducer } from "../reducers/rootReducer"
import { AppState, defaultAppState } from "../states/AppState"


export const AppStateContext = React.createContext<AppState | null>(null)
export const AppDispatchContext = React.createContext<React.ActionDispatch<[action: AppAction]> | null>(null)

export const AppContextWrapper: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [appState, dispatch] = React.useReducer(rootReducer, defaultAppState)

    return (
        <AppStateContext.Provider value={appState}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}