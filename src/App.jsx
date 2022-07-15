import { useEffect } from "react";
import { Loader, LeftBar, RightBar } from "./components/ui/";
import { Header, Footer } from "./components/layout";
import { About, Contact, Hero, Portfolio, Skills } from "./sections";
import "./App.css";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.history.replaceState("", "", "/");
  }, []);

  return (
    <>
      <Loader />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <LeftBar />
      <RightBar />
      <Footer />
    </>
  );
};

export default App;
