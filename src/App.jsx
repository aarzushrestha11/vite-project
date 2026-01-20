// App.js
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Solution from "./pages/Solution";
import UseCases from "./pages/UseCases";
import NotFound from './pages/404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/solutions" element={<Layout><Solution /></Layout>} />
        <Route path="/usecases" element={<Layout><UseCases /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;