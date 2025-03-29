import React from "react"
import { dispatchRunAction } from "../actions/AppActions"
import { useIsAllPending } from "../states/AppStateHooks"

export const RunButton: React.FC = () => {
    const isAllPending = useIsAllPending()
    const handleRunButtonClick = React.useCallback(() => {
        dispatchRunAction()
    }, [])

    return isAllPending && (
        <div data-testid="run-button">
            <button onClick={handleRunButtonClick}>🚀 Run</button>
        </div>
    )
}