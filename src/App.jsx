import {
  Footer,
  Header,
  Navbar,
  SectionAboutUs,
  SectionServices,
  Testimonials,
} from "./components";
import { BarsCharts } from "./graphs/BarsCharts";

function App() {
  return (
    <div className="container w-full max-w-[1380px] mx-auto">
      <Navbar />
      <Header />
      <SectionServices />
      <SectionAboutUs />
      <Testimonials />
      <Footer />
      <BarsCharts />
    </div>
  );
}

export default App;
