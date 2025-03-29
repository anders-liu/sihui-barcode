import React from "react"
import { dispatchAddSourcePdfFileAction } from "../actions/AppActions"
import { makeFileKey } from "../utils/utils"
import { useIsAllPending } from "../states/AppStateHooks"

export const SourcePdfFileSelector: React.FC = () => {
    const fileInputRef = React.useRef<HTMLInputElement>(null)
    const notStarted = useIsAllPending(/*includeEmpty*/true)

    const handlFileInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files ?? [];
        for (const file of files) {
            const fileKey = makeFileKey(file)
            dispatchAddSourcePdfFileAction({ fileKey, file })
        }
        e.currentTarget.value = ""
    }, []);

    return notStarted && (
        <div>
            <input id="select-pdf-files" ref={fileInputRef} type="file" multiple accept=".pdf" onChange={handlFileInputChange} />
        </div>
    )
}