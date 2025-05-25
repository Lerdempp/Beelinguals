import React, { useState, useEffect, useMemo } from "react";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Footer3 from './Footer3';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const SheetsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Legal Texts");
  const [selectedPdf, setSelectedPdf] = useState("");
  const [pdfList, setPdfList] = useState([]);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1);

  const categories = [
    "Legal Texts",
    "Literary Texts",
    "Medical Texts",
    "Technical Texts",
  ];

  const allPdfs = useMemo(() => ({
    "Legal Texts": [
      "Legal Texts - Legislative Power.pdf",
      "Legal Texts - Equality Before the Law.pdf",
      "Legal Texts - Emisyon ve Atık Raporlama.pdf",
      "Legal Texts - Kirletici Salım ve Taşıma Kaydı Yönetmeliği.pdf",
      "Legal Texts - Sofas and Armchairs Guarantee I.pdf",
      "Legal Texts - Sofas and Armchairs Guarantee II.pdf",
      "Legal Texts - Terms and Conditions I.pdf",
      "Legal Texts - Terms and Conditions II.pdf",
      "Legal Texts - Terms of Use I.pdf",
      "Legal Texts - Terms of Use II.pdf",
      "Legal Texts - Data Security I.pdf",
      "Legal Texts - Data Security II.pdf",
      "Legal Texts - Privacy Notice I.pdf",
      "Legal Texts - Privacy Notice II.pdf",
      "Legal Texts - Economic & Social Development Planning.pdf",
      "Legal Texts - Malların Serbest Dolaşımı & Ticaret Politikası.pdf",
      "Legal Texts - Multilateral Agreements on Trade in Goods.pdf"
    ],
    "Literary Texts": [
      "Literary Texts - Animal Farm.pdf",
      "Literary Texts - Bird Box.pdf",
      "Literary Texts - Little Prince.pdf",
      "Literary Texts - Metamorphosis.pdf",
      "Literary Texts - The Thorn.pdf",
      "Literary Texts - The Yellow Wallpaper.pdf",
      "Literary Texts - Winnie-the-Pooh I.pdf",
      "Literary Texts - Winnie-the-Pooh II.pdf"
    ],
    "Medical Texts": [
      "Medical Texts - Allergic Diseases.pdf",
      "Medical Texts - Bone Marrow Transplantation.pdf",
      "Medical Texts - Diabetic Neuropathy I.pdf",
      "Medical Texts - Diabetic Neuropathy II.pdf",
      "Medical Texts - Excipial Lipo I.pdf",
      "Medical Texts - Excipial Lipo II.pdf",
      "Medical Texts - Ligone Multivitamin Capsules.pdf",
      "Medical Texts - Narcolepsy Symptoms.pdf",
      "Medical Texts - Skin Disorders.pdf",
      "Medical Texts - What is Bruxism.pdf",
      "Medical Texts - What is Narcolepsy.pdf",
      "Medical Texts - Wisdom Teeth Extraction.pdf"
    ],
    "Technical Texts": [
      "Technical Texts - Citrus Smells in Perfumery I.pdf",
      "Technical Texts - Citrus Smells in Perfumery II.pdf",
      "Technical Texts - Iphone User Guide.pdf",
      "Technical Texts - Lego Bricks I.pdf",
      "Technical Texts - Lego Bricks II.pdf",
      "Technical Texts - Microwave User Guide I.pdf",
      "Technical Texts - Microwave User Guide II.pdf",
      "Technical Texts - Patient Information Leaflet I.pdf",
      "Technical Texts - Patient Information Leaflet II.pdf",
      "Technical Texts - Power User Guide I.pdf",
      "Technical Texts - Powerbank User Guide II.pdf",
      "Technical Texts - Toothbrush User Guide.pdf",
      "Technical Texts - Water Filter User Guide I.pdf",
      "Technical Texts - Water Filter User Guide II.pdf",
      "Technical Texts - Windows 10_ Quick User Guide.pdf"
    ]
  }), []);

  useEffect(() => {
    setPdfList(allPdfs[selectedCategory] || []);
    if (allPdfs[selectedCategory] && allPdfs[selectedCategory].length > 0) {
      setSelectedPdf(allPdfs[selectedCategory][0]);
    }
  }, [selectedCategory, allPdfs]);

  useEffect(() => {
    if (allPdfs[selectedCategory] && allPdfs[selectedCategory].length > 0) {
      setSelectedPdf(allPdfs[selectedCategory][0]);
    }
  }, []);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setPageNumber(1);
  }

  const getPdfUrl = (pdfName) => {
    if (!pdfName) return null;
    let category;
    if (pdfName.startsWith("Legal Texts")) {
      category = "LegalTexts";
    } else if (pdfName.startsWith("Literary Texts")) {
      category = "LiteraryTexts";
    } else if (pdfName.startsWith("Medical Texts")) {
      category = "MedicalTexts";
    } else if (pdfName.startsWith("Technical Texts")) {
      category = "TechnicalTexts";
    } 
    return `${process.env.PUBLIC_URL}/pdfs/${category}/${encodeURIComponent(pdfName)}`;
  };

  const handleDocumentLoadError = (error) => {
    console.error('Error loading PDF:', error);
    setError(`Failed to load PDF: ${error.message}. URL: ${getPdfUrl(selectedPdf)}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "400px"
      }}
    >
      <h1
        style={{
          width: "635px",
          color: "#000",
          textAlign: "center",
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "56px",
          userSelect: "none",
          cursor: "default"
        }}
      >
        The sheets we have prepared for you to work easily
      </h1>

      <div
        style={{
          display: "inline-flex",
          padding: "8px 12px",
          alignItems: "flex-start",
          gap: "10px",
          width: "auto",
          background: "#F3F4F6",
          borderRadius: "38px"
        }}
      >
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              display: "flex",
              padding: "4px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "999px",
              background: selectedCategory === category ? "#FFF" : "#F3F4F6",
              width: (() => {
                switch(category) {
                  case "Terms & Conditions":
                    return "164px";
                  case "Trade & Economy":
                    return "144px";
                  case "Data Security":
                    return "124px";
                  case "Legal Texts":
                    return "108px";
                  default:
                    return "120px";
                }
              })(),
              height: "20px",
              cursor: "pointer",
              userSelect: "none",
              boxShadow: selectedCategory === category ? "0px 10px 3px 0px rgba(117, 117, 117, 0.00)" : "none",
              border: selectedCategory === category ? "0.9px solid #F3F4F6" : "none"
            }}
          >
            <span
              style={{
                color: "#5C5C5C",
                textAlign: "center",
                fontFeatureSettings: "'ss11' on, 'cv09' on, 'liga' off, 'calt' off",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "-0.084px",
                whiteSpace: "nowrap",
                userSelect: "none",
                cursor: "pointer"
              }}
            >
              {category}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          width: "1152px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          marginBottom: "112px"
        }}
      >
        <div style={{ width: "100%", display: "flex", justifyContent: "flex-start", marginTop: "25px" }}>
          <div style={{
            position: "relative",
            minWidth: "300px"
          }}>
            <select
              value={selectedPdf}
              onChange={(e) => {
                setSelectedPdf(e.target.value);
              }}
              style={{
                width: "100%",
                padding: "8px 36px 8px 12px",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                background: "#F3F4F6",
                color: "#374151",
                fontSize: "14px",
                fontWeight: "400",
                cursor: "pointer",
                outline: "none",
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                userSelect: "none",
                pointerEvents: "auto",
                caretColor: "transparent"
              }}
            >
              <option value="" style={{ cursor: "pointer", userSelect: "none" }}>Select a PDF</option>
              {pdfList.map((pdf) => (
                <option key={pdf} value={pdf} style={{ cursor: "pointer", userSelect: "none" }}>
                  {pdf}
                </option>
              ))}
            </select>
            <div style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              width: "16px",
              height: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#374151"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {selectedPdf && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px"
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "20px",
                background: "#FFF",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                height: "800px",
                overflow: "auto"
              }}
            >
              {error ? (
                <div style={{ color: 'red', padding: '20px' }}>
                  <p>{error}</p>
                  <button 
                    onClick={() => setError(null)}
                    style={{
                      marginTop: '10px',
                      padding: '5px 10px',
                      background: '#F3F4F6',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <Document
                  file={getPdfUrl(selectedPdf)}
                  onLoadSuccess={(pdf) => {
                    console.log('PDF loaded successfully');
                    onDocumentLoadSuccess(pdf);
                  }}
                  onLoadError={handleDocumentLoadError}
                  loading={
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                      Loading PDF...
                    </div>
                  }
                  style={{ height: "100%" }}
                >
                  {numPages > 0 && (
                    <Page
                      pageNumber={pageNumber}
                      width={800 * scale}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      scale={scale}
                    />
                  )}
                </Document>
              )}
            </div>

            {numPages > 0 && (
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center",
                  background: "#F3F4F6",
                  borderRadius: "8px",
                  padding: "4px"
                }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setScale(Math.max(0.5, scale - 0.1));
                    }}
                    style={{
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: "18px",
                      color: "#374151"
                    }}
                  >
                    −
                  </button>
                  <div style={{
                    padding: "0 12px",
                    fontSize: "14px",
                    color: "#374151",
                    userSelect: "none"
                  }}>
                    {Math.round(scale * 100)}%
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setScale(Math.min(2, scale + 0.1));
                    }}
                    style={{
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: "18px",
                      color: "#374151"
                    }}
                  >
                    +
                  </button>
                </div>
                <div style={{ width: "1px", height: "24px", background: "#E5E7EB" }} />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPageNumber(Math.max(1, pageNumber - 1));
                  }}
                  disabled={pageNumber <= 1}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#F3F4F6",
                    cursor: pageNumber <= 1 ? "not-allowed" : "pointer",
                    opacity: pageNumber <= 1 ? 0.5 : 1
                  }}
                >
                  Previous
                </button>
                <p>Page {pageNumber} of {numPages}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPageNumber(Math.min(numPages, pageNumber + 1));
                  }}
                  disabled={pageNumber >= numPages}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#F3F4F6",
                    cursor: pageNumber >= numPages ? "not-allowed" : "pointer",
                    opacity: pageNumber >= numPages ? 0.5 : 1
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div style={{ 
        position: "absolute",
        bottom: "50px",
        left: 0,
        right: 0,
        width: "100%"
      }}>
        <Footer3 />
      </div>
    </div>
  );
};

export default SheetsPage;