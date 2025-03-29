import React from "react"
import { dispatchResetAction } from "../actions/AppActions"
import { useIsAllFinished } from "../states/AppStateHooks"

export const ResetButton: React.FC = () => {
    const isAllFinished = useIsAllFinished()
    const handleResetButtonClick = React.useCallback(() => {
        dispatchResetAction();
    }, [])

    return isAllFinished && (
        <button onClick={handleResetButtonClick}>🔄 Reset</button>
    )
}