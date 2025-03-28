import React from "react"
import { useSourcePdfFiles } from "../states/AppStateHooks"
import { SourcePdfFileState } from "../states/AppState"

export const SourcePdfFileList: React.FC = () => {
    const sourcePdfFiles = useSourcePdfFiles();

    return (
        <div>
            {Object.keys(sourcePdfFiles).map(key => {
                return <FileItemPart key={key} fileKey={key} sourcePdfFileState={sourcePdfFiles[key]} />
            })}
        </div>
    )
}

const FileItemPart: React.FC<{
    fileKey: string
    sourcePdfFileState: SourcePdfFileState
}> = ({ sourcePdfFileState }) => {
    const { file, status } = sourcePdfFileState;
    const { name, lastModified, size } = file;
    const lastModifiedDate = new Date(lastModified)
    return (
        <div>
            <div>{name}</div>
            <div>{lastModifiedDate.toLocaleDateString()}</div>
            <div>{size}</div>
            <div>{status}</div>
        </div>
    )
}