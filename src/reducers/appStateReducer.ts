import { AppAction, AddSourcePdfFileActionArgs, DeleteSourcePdfFileActionArgs, SetSourcePdfFileStatusActionArgs, SetSourcePdfFileProgressActionArgs } from "../actions/AppActions"
import { AppState, SourcePdfFileState, SourcePdfFileListState } from "../states/AppState"

export function appStateReducer(appState: AppState, action: AppAction): AppState {
    const sourcePdfFiles = sourcePdfFilesReducer(appState.sourcePdfFiles, action);

    return Object.assign({}, appState, {
        sourcePdfFiles
    })
}

function sourcePdfFilesReducer(sourcePdfFiles: SourcePdfFileListState, action: AppAction): SourcePdfFileListState {
    switch (action.type) {
        case "ADD_SOURCE_PDF_FILE": {
            const { fileKey, file } = action.args as AddSourcePdfFileActionArgs
            const sourcePdfFileState: SourcePdfFileState = {
                file,
                status: "Pending",
                progress: "",
            }
            const nextState = Object.assign({}, sourcePdfFiles)
            nextState[fileKey] = sourcePdfFileState
            return nextState
        }
        case "DELETE_SOURCE_PDF_FILE": {
            const { fileKey } = action.args as DeleteSourcePdfFileActionArgs
            const nextState = Object.assign({}, sourcePdfFiles)
            delete nextState[fileKey]
            return nextState
        }
        case "SET_SOURCE_PDF_FILE_STATUS": {
            const { fileKey, status } = action.args as SetSourcePdfFileStatusActionArgs
            const nextState = Object.assign({}, sourcePdfFiles)
            nextState[fileKey].status = status
            return nextState
        }
        case "SET_SOURCE_PDF_FILE_PROGRESS": {
            const { fileKey, progress } = action.args as SetSourcePdfFileProgressActionArgs
            const nextState = Object.assign({}, sourcePdfFiles)
            nextState[fileKey].progress = progress
            return nextState
        }
        case "RESET": {
            return {}
        }
        default: {
            return sourcePdfFiles
        }
    }
}