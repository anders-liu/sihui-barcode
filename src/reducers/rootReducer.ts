import { AppAction } from "../actions/AppActions"
import { AppState } from "../states/AppState"
import { appStateReducer } from "./appStateReducer"
import { pdfParserReducer } from "./pdfParserReducer"

export function rootReducer(appState: AppState, action: AppAction): AppState {
    let nextState = appStateReducer(appState, action)
    nextState = pdfParserReducer(nextState, action)
    return nextState
}