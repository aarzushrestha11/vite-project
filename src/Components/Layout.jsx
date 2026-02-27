// Layout.jsx
import Footer from "./Footer"; // We'll create this from your footer section
import Navbar from "./Navbar"; // This will be only the navigation bar

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-linear-to-b from-blue-50 to-white text-gray-800"
      style={{
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        fontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      }}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
