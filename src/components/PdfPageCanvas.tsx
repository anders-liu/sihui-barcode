import React from "react";

export const PdfPageCanvas: React.FC = () => {
    return (
        <div data-testid="pdf-page-canvas">
            <canvas id="pdf-page-canvas" />
        </div>
    )
}