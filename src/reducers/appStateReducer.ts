import { AppAction, IncCountAction } from "../actions/AppActions"
import { AppState } from "../states/AppState"

export function appStateReducer(appState: AppState, action: AppAction): AppState {
    switch (action.type) {
        case "INC_COUNT": {
            const { by } = action as IncCountAction
            const { count } = appState
            const nextState = Object.assign({}, appState, { count: count + by })
            return nextState
        }
    }
}