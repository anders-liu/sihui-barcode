import React from "react"
import { useDispatchAddSourcePdfFile } from "../dispatchs/DispatchHooks"
import { makeFileKey } from "../utils/utils"

export const SourcePdfFileSelector: React.FC = () => {
    const fileInputRef = React.useRef<HTMLInputElement>(null)
    const addSourcePdfFile = useDispatchAddSourcePdfFile()

    const handlFileInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files ?? [];
        for (const file of files) {
            const key = makeFileKey(file)
            addSourcePdfFile(key, file)
        }
    }, []);

    return (
        <div>
            <input ref={fileInputRef} type="file" multiple accept=".pdf" onChange={handlFileInputChange} />
        </div>
    )
}