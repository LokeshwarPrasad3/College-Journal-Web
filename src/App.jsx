import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import InstructionAuthor from "./Pages/InstructionAuthor";
import Policies from "./Pages/Policies";
import ReviewPolicy from "./Pages/ReviewPolicy";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/instruction-author" element={<InstructionAuthor />} />
        <Route path="/review-policy" element={<ReviewPolicy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
