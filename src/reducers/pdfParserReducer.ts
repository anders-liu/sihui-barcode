import { AppState, SourcePdfFileListState, SourcePdfFileState } from "../states/AppState"
import { AppAction, dispatchSetSourcePdfFileProgressAction, dispatchSetSourcePdfFileStatusAction } from "../actions/AppActions"
import * as pdfjsLib from "pdfjs-dist"

export function pdfParserReducer(appState: AppState, action: AppAction): AppState {
    switch (action.type) {
        case "RUN": {
            parsePdfList(appState.sourcePdfFiles)
        }
    }

    return appState
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
            await parsePdf(fileKey, fileState)
            dispatchSetSourcePdfFileStatusAction({ fileKey, status: "Done" })
        } catch (error) {
            dispatchSetSourcePdfFileStatusAction({ fileKey, status: "Error" })
        }
        dispatchSetSourcePdfFileProgressAction({ fileKey, progress: "" })
    }
}

async function parsePdf(fileKey: string, fileState: SourcePdfFileState): Promise<void> {
    const { file } = fileState

    dispatchSetSourcePdfFileProgressAction({ fileKey, progress: "Opening file ..." })
    const arrayBuffer = await file.arrayBuffer()

    dispatchSetSourcePdfFileProgressAction({ fileKey, progress: "Reading PDF ..." })
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.0.375/build/pdf.worker.min.mjs"
    const pdfDoc = await pdfjsLib.getDocument(arrayBuffer).promise

    const pageCounts = pdfDoc.numPages

    for (let i = 0; i < pageCounts; i++) {
        const pageNumber = i + 1;
        dispatchSetSourcePdfFileProgressAction({ fileKey, progress: `Opening page ${pageNumber} of ${pageCounts} ...` })
        const page = await pdfDoc.getPage(pageNumber)

        dispatchSetSourcePdfFileProgressAction({ fileKey, progress: `Rendering page ${pageNumber} of ${pageCounts} ...` })
        const canvas = document.getElementById("pdf-page-canvas")! as HTMLCanvasElement;
        const context = canvas.getContext("2d")!;
        const viewport = page.getViewport({ scale: 2 })

        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = Math.floor(viewport.width) + "px";
        canvas.style.height = Math.floor(viewport.height) + "px";

        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        await page.render(renderContext).promise;

        //context.clearRect(0, 0, canvas.width, canvas.height)

        //await new Promise(r => setTimeout(r, 2000))
    }
}