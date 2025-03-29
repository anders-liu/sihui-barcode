import { dispatchAppAction } from "../context/AppContext"
import { SourcePdfFileStatus } from "../states/AppState"

export type AppActionType
    = "ADD_SOURCE_PDF_FILE"
    | "DELETE_SOURCE_PDF_FILE"
    | "SET_SOURCE_PDF_FILE_STATUS"
    | "SET_SOURCE_PDF_FILE_PROGRESS"
    | "RUN"
    | "RESET"

export type AppAction<TArgs = {}> = {
    type: AppActionType
    args: TArgs
}

export type AddSourcePdfFileActionArgs = {
    fileKey: string
    file: File
}

export type DeleteSourcePdfFileActionArgs = {
    fileKey: string
}

export type SetSourcePdfFileStatusActionArgs = {
    fileKey: string
    status: SourcePdfFileStatus
}

export type SetSourcePdfFileProgressActionArgs = {
    fileKey: string
    progress: string
}

export function dispatchAddSourcePdfFileAction(args: AddSourcePdfFileActionArgs): void {
    dispatchAppAction({ type: "ADD_SOURCE_PDF_FILE", args })
}

export function dispatchDeleteSourcePdfFileAction(args: DeleteSourcePdfFileActionArgs): void {
    dispatchAppAction({ type: "DELETE_SOURCE_PDF_FILE", args })
}
export function dispatchSetSourcePdfFileStatusAction(args: SetSourcePdfFileStatusActionArgs): void {
    dispatchAppAction({ type: "SET_SOURCE_PDF_FILE_STATUS", args })
}

export function dispatchSetSourcePdfFileProgressAction(args: SetSourcePdfFileProgressActionArgs): void {
    dispatchAppAction({ type: "SET_SOURCE_PDF_FILE_PROGRESS", args })
}

export function dispatchRunAction(): void {
    dispatchAppAction({ type: "RUN", args: {} })
}

export function dispatchResetAction(): void {
    dispatchAppAction({ type: "RESET", args: {} })
}
