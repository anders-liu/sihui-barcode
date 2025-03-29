export interface AppState {
    sourcePdfFiles: SourcePdfFileListState
}

export type SourcePdfFileStatus = "Pending" | "Processing" | "Done" | "Error"

export interface SourcePdfFileListState {
    [fileKey: string]: SourcePdfFileState
}

export interface SourcePdfFileState {
    file: File
    status: SourcePdfFileStatus
    progress: string
}

export const defaultAppState: AppState = {
    sourcePdfFiles: {}
}
