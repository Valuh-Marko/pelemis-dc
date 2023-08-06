import LoadingPage from "./pages/LoadingPage/LoadingPage"
import { Routes, Route, useLocation } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/Home/HomePage";
import GalleryPage from "./pages/GaleryPage/GalleryPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { AnimatePresence } from "framer-motion";
import NavigationToggle from "./components/NavigationToggle/NavigationToggle";

function App() {
  const location = useLocation();

  return (
    <div className="main-page-wrapper">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<LoadingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Navigation />
      <NavigationToggle />
    </div>
  )
}

export default App
