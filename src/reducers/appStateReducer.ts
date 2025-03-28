import { AppAction, AddSourcePdfFileAction } from "../actions/AppActions"
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
            const { key, file } = action as AddSourcePdfFileAction
            const sourcePdfFileState: SourcePdfFileState = {
                file,
                status: "Pending"
            }
            const nextState = Object.assign({}, sourcePdfFiles, { [key]: sourcePdfFileState })
            return nextState
        }
    }
}