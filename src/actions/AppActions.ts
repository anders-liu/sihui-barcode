export type AppActionType
    = "INC_COUNT"

export interface AppAction {
    type: AppActionType
}

export interface IncCountAction extends AppAction {
    by: number
    ac : string
}

export function makeIncCountAction(by: number): IncCountAction {
    return { type: "INC_COUNT", by, ac: "" }
}
