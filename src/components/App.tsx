import React from "react"
import "./App.css"
import { useCount } from "../states/AppStateHooks"
import { useDispatchIncCount } from "../dispatchs/DispatchHooks"

export const App: React.FC = () => {
    const count = useCount()
    const dispatchIncCount = useDispatchIncCount()

    return (
        <div className="card">
            <button onClick={() => dispatchIncCount(5)}>
                count is {count}
            </button>
        </div>
    )
}
