import { Navbar } from "@/components/Navbar";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Benefits } from "@/components/Benefits";
import { Vendors } from "@/components/Vendors";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

const Main = () => (
  <main>
    <Intro />
    <About />
    <Products />
    <Benefits />
    <Vendors />
    <Contacts />
  </main>
);

const App = () => (
  <>
    <Navbar />
    <Main />
    <Footer />
  </>
);

export default App;
