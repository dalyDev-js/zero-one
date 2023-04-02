import "./App.scss";
import {
  About,
  Header,
  Footer,
  Contact,
  Gallery,
  Courses,
  OurTeam,
} from "./container";

import { Navbar } from "./components";
import Join from "./container/join us/Join";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Courses />
      <Gallery />
      <About />
      <OurTeam />
      <Contact />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
