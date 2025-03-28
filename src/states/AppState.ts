export interface AppState {
    sourcePdfFiles: SourcePdfFileListState
}

export type SourcePdfFileStatus = "Pending" | "Processing" | "Done" | "Error"

export interface SourcePdfFileListState {
    [key: string]: SourcePdfFileState
}

export interface SourcePdfFileState {
    file: File
    status: SourcePdfFileStatus
}

export const defaultAppState: AppState = {
    sourcePdfFiles: {}
}
