import About from "./app/components/about/About";
import Explore from "./app/components/explore/Explore";
import Features from "./app/components/features/Features";
import Header from "./app/components/header/Header";
import Navbar from "./app/components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Explore />
      <About />
    </>
  );
}

export default App;
