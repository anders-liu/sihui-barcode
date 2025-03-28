export type AppActionType
    = "ADD_SOURCE_PDF_FILE"

export interface AppAction {
    type: AppActionType
}

export interface AddSourcePdfFileAction extends AppAction {
    key: string
    file: File
}

export function makeAddSourcePdfFileAction(key: string, file: File): AddSourcePdfFileAction {
    return { type: "ADD_SOURCE_PDF_FILE", key, file }
}
