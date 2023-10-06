import LoadingPage from "./pages/LoadingPage/LoadingPage"
import { Routes, Route, useLocation } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/Home/HomePage";
import GalleryPage from "./pages/GaleryPage/GalleryPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { AnimatePresence } from "framer-motion";
import NavigationToggle from "./components/NavigationToggle/NavigationToggle";
import TeamPage from "./pages/TeamPage/TeamPage";

function App() {
  const location = useLocation();

  return (
    <div className="main-page-wrapper">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<LoadingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </AnimatePresence>
      <Navigation />
      <NavigationToggle />
    </div>
  )
}

export default App
