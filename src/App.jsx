import {
  Footer,
  Header,
  Navbar,
  SectionAboutUs,
  SectionServices,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className="container w-full max-w-[1380px] mx-auto">
      <Navbar />
      <Header />
      <SectionServices />
      <SectionAboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
