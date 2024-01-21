import About from "./pages/about/About";
import Hero from "./pages/hero/Hero";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
