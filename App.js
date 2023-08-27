import React, { useState } from "react";
import "./styles.css"; // Import your CSS file
import FirstPage from "./components/FirstPage"; // Adjust the path to FirstPage component
import SecondPage from "./components/SecondPage"; // Adjust the path to SecondPage component

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="App">
      {currentPage === 1 && <FirstPage onNext={handleNextPage} />}
      {currentPage === 2 && <SecondPage />}
    </div>
  );
}
