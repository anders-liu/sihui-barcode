import React from "react"
import { useIsAllPending, useSourcePdfFiles } from "../states/AppStateHooks"
import { SourcePdfFileState } from "../states/AppState"
import { dispatchDeleteSourcePdfFileAction } from "../actions/AppActions";

export const SourcePdfFileList: React.FC = () => {
    const sourcePdfFiles = useSourcePdfFiles();

    return (
        <div>
            {Object.keys(sourcePdfFiles).map(fileKey => {
                return <FileItemPart key={fileKey} fileKey={fileKey} sourcePdfFileState={sourcePdfFiles[fileKey]} />
            })}
        </div>
    )
}

const FileItemPart: React.FC<{
    fileKey: string
    sourcePdfFileState: SourcePdfFileState
}> = ({ fileKey, sourcePdfFileState }) => {
    const { file, status, progress } = sourcePdfFileState;
    const { name, lastModified, size } = file;
    const lastModifiedDate = new Date(lastModified)

    const isAllPending = useIsAllPending();

    const handleDeleteButtonClick = React.useCallback(() => {
        dispatchDeleteSourcePdfFileAction({ fileKey })
    }, [fileKey])

    return (
        <div>
            <div>📃 {name}</div>
            <div>{lastModifiedDate.toLocaleDateString()}</div>
            <div>{size}</div>
            <div>{status}</div>
            <div>{progress}</div>
            {isAllPending && (<div><button onClick={handleDeleteButtonClick}>🗑️ Delete</button></div>)}
        </div>
    )
}