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
    <div className="container mx-auto w-full max-w-screen-2xl selection:bg-blue-600">
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
