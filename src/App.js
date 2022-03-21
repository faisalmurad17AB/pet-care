import Goals from "./components/Goals/Goals";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero/> */}
      <Goals />
      <Testimonials/>
    </div>
  );
}

export default App;
