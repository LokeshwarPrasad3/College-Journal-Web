import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutJournal from "./Pages/AboutJournal";
import InstructionAuthor from "./Pages/InstructionAuthor";
import Policies from "./Pages/EditorialPolicies";
import ReviewPolicy from "./Pages/ReviewPolicy";
import EditorBoard from "./Pages/EditorBoard";
import Login from "./Components/Login";
import Signup from "./Components/Signup";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutJournal />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/editor-board" element={<EditorBoard />} />
        <Route path="/instruction-author" element={<InstructionAuthor />} />
        <Route path="/review-policy" element={<ReviewPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
