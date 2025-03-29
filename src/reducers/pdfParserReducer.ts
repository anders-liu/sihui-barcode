import { AppState, SourcePdfFileListState, SourcePdfFileState } from "../states/AppState";
import { AppAction, dispatchSetSourcePdfFileProgressAction, dispatchSetSourcePdfFileStatusAction } from "../actions/AppActions";

export function pdfParserReducer(appState: AppState, action: AppAction): AppState {
    switch (action.type) {
        case "RUN": {
            parsePdfList(appState.sourcePdfFiles)
        }
    }

    return appState;
}

function parsePdfList(sourcePdfFiles: SourcePdfFileListState): void {
    parsePdfListAsync(sourcePdfFiles).then(() => {
        console.log("app-info:parsePdfList done.")
    }).catch((error) => {
        console.error("app-err:parsePdfList error", error)
    })
}

async function parsePdfListAsync(sourcePdfFiles: SourcePdfFileListState): Promise<void> {
    for (const [fileKey, fileState] of Object.entries(sourcePdfFiles)) {
        try {
            dispatchSetSourcePdfFileStatusAction({ fileKey, status: "Processing" })
            await parsePdf(fileKey, fileState);
            dispatchSetSourcePdfFileStatusAction({ fileKey, status: "Done" })
        } catch (error) {
            dispatchSetSourcePdfFileStatusAction({ fileKey, status: "Error" })
        }
    }
}

async function parsePdf(fileKey: string, fileState: SourcePdfFileState): Promise<void> {
    await new Promise(r => setTimeout(r, 1000))
    dispatchSetSourcePdfFileProgressAction({ fileKey, progress: "step 1" })
    await new Promise(r => setTimeout(r, 1000))
    dispatchSetSourcePdfFileProgressAction({ fileKey, progress: "step 2" })
    await new Promise(r => setTimeout(r, 1000))
    dispatchSetSourcePdfFileProgressAction({ fileKey, progress: "step 3" })
    await new Promise(r => setTimeout(r, 1000))
}