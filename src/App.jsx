// src/App.jsx
import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./components/HomeView/HomeView";
import Navbar from "./components/Navbar/Navbar";
import EventTypes from "./components/EventTypes/EventTypes";
import EventCalPage from "./components/EventCal/EventCalPage";
import AboutUsPage from "./components/AboutUsPage/AboutPage";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import GetInvolved from "./components/GetInvolved/GetInvolved";
import ScrollToTop from './ScrollToTop';
function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Navbar />
        <div className="bg-fixed"></div>
        <div className="content">
          <Routes >
            <Route path="/" element={<HomeView />} />
            <Route path="/event-types" element={<EventTypes />} />
            <Route path="/event-types/:tag?" element={<EventTypes />} />
            <Route path="/event-calendar" element={<EventCalPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </div>
        <Footer /> 
      </Router>
    </>
  );
}

export default App;
