import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
}

export function PDFViewer({ file }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function goToPrevPage(): void {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  }

  function goToNextPage(): void {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages || 1));
  }

  return (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />
      </Document>
      <div>
        <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <span> | </span>
        <button onClick={goToNextPage} disabled={pageNumber >= (numPages || 1)}>
          Next
        </button>
      </div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}