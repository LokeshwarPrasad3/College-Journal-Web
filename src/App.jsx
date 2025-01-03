import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutJournal from './Pages/AboutJournal';
import InstructionAuthor from './Pages/InstructionAuthor';
import Policies from './Pages/EditorialPolicies';
import ReviewPolicy from './Pages/ReviewPolicy';
import EditorBoard from './Pages/EditorBoard';
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
import ContactUs from './Pages/ContactUs';
import CallForPaper from './Pages/CallForPaper';
import Volume1Issue12024 from './Pages/Archieves/Journals/2024/Volume1Issue12024';
import Volume1Issue22024 from './Pages/Archieves/Journals/2024/Volume1Issue22024';
import ArchivesPage from './Pages/Archieves/ArchivesPage';
import Volume2Issue12025 from './Pages/Archieves/Journals/2025/Volume2Issue12025';

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
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/call-for-paper" element={<CallForPaper />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/volume-1-issue-1-2024" element={<Volume1Issue12024 />} />
        <Route path="/volume-1-issue-2-2024" element={<Volume1Issue22024 />} />
        <Route path="/volume-2-issue-1-2025" element={<Volume2Issue12025 />} />
        <Route path="/archives" element={<ArchivesPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
