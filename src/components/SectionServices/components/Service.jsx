import { Navbar, Footer } from "../../";
import { ServiceBody } from "./ServiceBody";
import { ServiceDetail } from "./ServiceDetail";
import { ServiceHeader } from "./ServiceHeader";

export const Service = () => {
  return (
    <section>
      <Navbar />
      {ServiceDetail.map(({ id, data }) => (
        <main key={id}>
          <ServiceHeader title={data.title} />
          <ServiceBody
            title={data.title}
            description={data.description}
            descriptionStatus={data.descriptionStatus}
          />
        </main>
      ))}
      <Footer />
    </section>
  );
};
