import React, { useState, useEffect, useMemo } from "react";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Footer3 from './Footer2';
import { pdfKeyterms } from '../data/keyterms';
import Comments from "./Comments/Comments.jsx";
import CommentSection from "./BlogAlt/CommentSection.jsx";

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Words = () => {
  const [selectedCategory, setSelectedCategory] = useState("Terminology Exercises");
  const [selectedPdf, setSelectedPdf] = useState("Terminology Exercises - Legal Texts II.pdf");
  const [pdfList, setPdfList] = useState([]);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const [inputStates, setInputStates] = useState({});
  const [hoveredWord, setHoveredWord] = useState(null);

  const allPdfs = useMemo(() => ({
    "Terminology Exercises": [
      "Terminology Exercises - Legal Texts II.pdf",
      "Terminology Exercises - Legal Texts III.pdf",
      "Terminology Exercises - Legal Texts IV.pdf",
      "Terminology Exercises - Medical Texts I.pdf",
      "Terminology Exercises - Technical Texts I.pdf"
    ]
  }), []);

  const allWords = useMemo(() => ({
    "Legal Texts": [],
    "Terms & Conditions": [],
    "Data Security": [],
    "Trade & Economy": []
  }), []);

  useEffect(() => {
    setPdfList(allPdfs[selectedCategory] || []);
    if (allPdfs[selectedCategory] && allPdfs[selectedCategory].length > 0) {
      setSelectedPdf(allPdfs[selectedCategory][0]);
    }
  }, [selectedCategory, allPdfs]);

  useEffect(() => {
    if (allPdfs["Terminology Exercises"] && allPdfs["Terminology Exercises"].length > 0) {
      setSelectedPdf(allPdfs["Terminology Exercises"][0]);
      setPdfList(allPdfs["Terminology Exercises"]);
    }
  }, []);

  // PDF değiştiğinde input değerlerini ve durumlarını sıfırla
  useEffect(() => {
    setInputValues({});
    setInputStates({});
    setFocusedIndex(null);
    setHoveredIndex(null);
  }, [selectedPdf, selectedCategory]);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setPageNumber(1);
  }

  const getPdfUrl = (pdfName) => {
    if (!pdfName) return null;
    // Use process.env.PUBLIC_URL to get the correct public path
    let category;
    if (pdfName.startsWith("Legal Texts")) {
      category = "LegalTexts";
    } else if (pdfName.startsWith("Literary Texts")) {
      category = "LiteraryTexts";
    } else if (pdfName.startsWith("Medical Texts")) {
      category = "MedicalTexts";
    } else if (pdfName.startsWith("Technical Texts")) {
      category = "TechnicalTexts";
    } else if (pdfName.startsWith("Terminology Exercises")) {
      category = "TerminologyExercises";
    }
    return `${process.env.PUBLIC_URL}/pdfs/${category}/${encodeURIComponent(pdfName)}`;
  };

  const handleDocumentLoadError = (error) => {
    console.error('Error loading PDF:', error);
    setError(`Failed to load PDF: ${error.message}. URL: ${getPdfUrl(selectedPdf)}`);
  };

  const getInputContainerStyle = (index) => {
    const isHovered = hoveredIndex === index;
    const isFocused = focusedIndex === index;
    const isFilled = inputValues[index]?.length > 0;
    const answerState = inputStates[index];

    const baseStyle = {
      flex: "1",
      display: "flex",
      padding: "10px 10px 10px 12px",
      alignItems: "center",
      gap: "8px",
      borderRadius: "10px",
      border: "1px solid #E5E5E5",
      background: "#FFF",
      boxShadow: "0px 1px 2px rgba(10, 13, 20, 0.03)",
      transition: "all 0.2s ease-in-out"
    };

    if (answerState) {
      return {
        ...baseStyle,
        border: `1px solid ${answerState === 'correct' ? '#10B981' : '#FB3748'}`,
        boxShadow: answerState === 'correct'
          ? "0px 0px 0px 2px rgba(16, 185, 129, 0.1)"
          : "0px 0px 0px 2px rgba(251, 55, 72, 0.1)"
      };
    }

    if (isFocused) {
      return {
        ...baseStyle,
        border: "1px solid #141414",
        boxShadow: "0px 0px 0px 2px #FFF, 0px 0px 0px 4px rgba(153, 160, 174, 0.16)"
      };
    }

    if (isHovered) {
      return {
        ...baseStyle,
        background: "#F3F4F6",
        border: "1px solid #E5E5E5",
        cursor: "text"
      };
    }

    return baseStyle;
  };

  const handleKeyPress = (e, index, correctAnswer) => {
    if (e.key === 'Enter') {
      const currentValue = inputValues[index]?.trim().toLowerCase();
      const isCorrect = currentValue === correctAnswer.toLowerCase();
      
      setInputStates(prev => ({
        ...prev,
        [index]: isCorrect ? 'correct' : 'incorrect'
      }));
    }
  };

  // İngilizce kelime container'ı için stil
  const getEnglishWordStyle = (term) => ({
    position: "relative",
    flex: "1",
    color: "#000",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "-0.176px",
    cursor: "help",
    paddingTop: "4px"
  });

  // Tooltip stili
  const tooltipStyle = {
    position: "absolute",
    bottom: "100%",
    left: "0",
    transform: "translateY(-4px)",
    background: "#141414",
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "14px",
    whiteSpace: "nowrap",
    zIndex: 9999,
    pointerEvents: "none",
    boxShadow: "0px 12px 24px 0px rgba(14, 18, 27, 0.06), 0px 1px 2px 0px rgba(14, 18, 27, 0.03)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px"
  };

  // Tooltip içeriği için wrapper component
  const Tooltip = ({ text }) => (
    <div style={tooltipStyle}>
      {text}
      <div style={{
        position: "absolute",
        width: "8px",
        height: "8px",
        background: "#141414",
        transform: "rotate(45deg)",
        bottom: "-4px",
        left: "12px",
        zIndex: -1
      }} />
    </div>
  );

  // Input değiştiğinde durumu sıfırla
  const handleInputChange = (index, value) => {
    if (!value || value.trim() === '') {
      // Eğer input boşsa, o index için tüm state'leri temizle
      setInputValues(prev => {
        const newValues = { ...prev };
        delete newValues[index];
        return newValues;
      });
      setInputStates(prev => {
        const newState = { ...prev };
        delete newState[index];
        return newState;
      });
    } else {
      // Değer varsa sadece input değerini güncelle
      setInputValues(prev => ({
        ...prev,
        [index]: value
      }));
    }
  };

  // Input alanı component'i
  const renderInput = (index, term) => {
    return (
      <div
        style={getInputContainerStyle(index)}
        onMouseEnter={() => {
          setHoveredIndex(index);
        }}
        onMouseLeave={() => {
          if (focusedIndex !== index) {
            setHoveredIndex(null);
          }
        }}
      >
        <input
          type="text"
          placeholder="Enter translation here"
          onFocus={() => {
            setFocusedIndex(index);
            setHoveredIndex(index);
          }}
          onBlur={() => {
            setFocusedIndex(null);
            setHoveredIndex(null);
            if (!inputValues[index] || inputValues[index].trim() === '') {
              setInputValues(prev => {
                const newValues = { ...prev };
                delete newValues[index];
                return newValues;
              });
              setInputStates(prev => {
                const newState = { ...prev };
                delete newState[index];
                return newState;
              });
            }
          }}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyPress={(e) => handleKeyPress(e, index, term.turkish)}
          value={inputValues[index] || ''}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            width: "100%",
            color: '#141414',
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "-0.084px"
          }}
        />
      </div>
    );
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
          lineHeight: "56px"
        }}
      >
        The sheets we have prepared for you to work easily
      </h1>

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
                setInputValues({});
                setInputStates({});
                setFocusedIndex(null);
                setHoveredIndex(null);
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
                userSelect: "none"
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

        {/* Container for displaying keyterms */}
        <div
          style={{
            width: "1152px",
            height: "fit-content",
            minHeight: "100px",
            flexShrink: 0,
            borderRadius: "8px",
            padding: "24px",
            boxSizing: "border-box",
            background: "#FFFFFF",
            marginTop: "48px",
          }}
        >
          {selectedPdf ? (
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "100%",
              position: "relative"
            }}>
              {pdfKeyterms[selectedPdf]?.map((term, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                    paddingBottom: "12px",
                    borderBottom: "1px dashed #E5E7EB",
                    width: "100%"
                  }}
                >
                  <div
                    style={getEnglishWordStyle(term)}
                    onMouseEnter={() => setHoveredWord(term.english)}
                    onMouseLeave={() => setHoveredWord(null)}
                  >
                    {term.english}
                    {hoveredWord === term.english && (
                      <Tooltip text={term.turkish} />
                    )}
                  </div>
                  {renderInput(index, term)}
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: "center",
                color: "#6B7280",
              padding: "40px"
              }}>
              Please select a PDF to view its key terms
            </div>
          )}
        </div>
      </div>

      {/* Comments Section */}
      <div style={{ width: "100%", maxWidth: "1152px", margin: "48px auto 0 auto" }}>
        <Comments />
        <CommentSection />
      </div>

      {/* Footer */}
      <div style={{ 
        width: "100%", 
        marginTop: "-450px" 
      }}>
        <Footer3 />
      </div>
    </div>
  );
};

export default Words;