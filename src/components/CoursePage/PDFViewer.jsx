// src/components/PDFViewer.jsx
import React, { useState, useEffect } from 'react';

export default function PDFViewer({ file }) {
  const [pdfSrc, setPdfSrc] = useState('');

  useEffect(() => {
    if (!file) {
      setPdfSrc('');
      return;
    }

    // If it's already a URL string, use it directly
    if (typeof file === 'string') {
      setPdfSrc(file);
      return;
    }

    // If it's a File or Blob, create an object URL
    if (file instanceof Blob) {
      const url = URL.createObjectURL(file);
      setPdfSrc(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }

    console.error('Unsupported file type for PDFViewer:', file);
    setPdfSrc('');
  }, [file]);

  if (!pdfSrc) {
    return (
      <div className="flex justify-start">
        <div className="w-[89rem] py-20 text-center text-gray-500">
          No PDF file provided.
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="w-[89rem] h-screen">
        <iframe
          src={pdfSrc}
          title="PDF Viewer"
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
}
