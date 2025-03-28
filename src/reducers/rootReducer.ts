import { AppAction } from "../actions/AppActions"
import { AppState } from "../states/AppState"
import { appStateReducer } from "./appStateReducer"

export function rootReducer(appState: AppState, action: AppAction): AppState {
    const nextState = appStateReducer(appState, action)
    return nextState
}