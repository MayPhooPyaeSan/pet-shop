import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <AboutUs />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
