import "./App.css";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Technologies from "../components/Technologies/Technologies";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Technologies />
      <Projects />
    </>
  );
}
