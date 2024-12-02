import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import UniversityPage from "./Pages/UniversityPage"; // Import the UniversityPage component

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/search" element={<SearchPage />} />
          {/* Route for the UniversityPage with a dynamic parameter */}
          <Route exact path="/university/:id" element={<UniversityPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
