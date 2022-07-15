import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Hero />
      <Header />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
