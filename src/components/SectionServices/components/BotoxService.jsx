import { firstImageBotox } from "../../../assets/imagesServices";

export const BotoxService = () => {
  return (
    <div className="mx-32 mb-28 mt-14">
      <header className=" [&>div>p]:section-service">
        <div className="flex items-center">
          <img className="w-72" src={firstImageBotox} alt="" />
          <p className="bg-[#e6f9fb]">
            Está aprobada su utilización en medicina estética por la Agencia
            Española del Medicamento a partir de los 18 años porque lo que se
            pretende es prevenir las arrugas de expresión.
          </p>
        </div>
        <div className="flex items-center">
          <p>
            Se recomienda iniciar con el bótox a partir de los 30-35 años porque
            es cuando comenzamos a notarnos esas arrugas de gesticulación que
            van quedando marcadas.
          </p>
          <img className="w-72" src={firstImageBotox} alt="" />
        </div>
        <div className="flex items-center">
          <img className="w-72" src={firstImageBotox} alt="" />
          <p className="bg-[#e6f9fb]">
            Los resultados se empiezan a ver a partir de 48-72h una vez
            realizado el tratamiento, pero el efecto máximo tarda hasta 15 días
            en instaurarse.
          </p>
        </div>
        <div className="flex items-center justify-end gap-32">
          <p>Se recomienda una cada seis meses, dos veces al año.</p>
          <img className="w-72" src={firstImageBotox} alt="" />
        </div>
      </header>
      <hr className="mx-auto my-14 w-40 border border-[#d8e6e8] " />
      <main className="space-y-12">
        <h1 className="text-2xl font-bold text-[#024873] ">BOTOX</h1>
        <p className="text-justify text-lg font-light ">
          El tratamiento de Botox o toxina botulínica consiste en pequeñas
          inyecciones en las áreas a tratar, que consiguen bloquear de forma
          reversible el impulso nervioso que produce la contracción muscular.
          Así se crea una relajación de los músculos faciales logrando detener
          la aparición de arrugas de expresión de forma temporal. De hecho, no
          hay que esperar a que estas sean profundas para comenzar con el
          tratamiento, sino que los expertos aconsejan comenzar con el bótox
          preventivo alrededor de los 30-35 años.
        </p>
        <h2 className="text-center text-2xl font-bold text-[#024873]">
          BENEFICIOS
        </h2>
        <img className="mx-auto h-[600px]" src={firstImageBotox} alt="" />
      </main>
      <footer className="flex gap-24">
        <ul className="list-disc space-y-6 text-[17px] font-medium text-[#024873] ">
          <li>No requiere anestesia.</li>
          <li>No requiere hospitalización posterior.</li>
          <li>
            Es un tratamiento muy rápido y no impide realizar tus actividades
            diarias.
          </li>
          <li>
            Se inyecta en la zona a tratar. Por lo que no afecta a otros niveles
            del organismo.
          </li>
          <li>Se adapta a cada rostro y forma de gesticular.</li>
        </ul>
        <ul className="list-disc space-y-6 text-[17px] font-medium text-[#024873]">
          <li>
            El tratamiento es reversible. Por si los efectos no han sido los
            esperados.
          </li>
          <li>
            Es una técnica muy segura. Bien aplicado no suele provocar efectos
            secundarios
          </li>
          <li>No varía los volúmenes y proporciones del rostro.</li>
          <li>Se puede aplicar en cualquier época del año.</li>
          <li>
            El efecto puede durar entre 3 y 9 meses y se recomiendan 2 sesiones
            al año.
          </li>
        </ul>
      </footer>
      <hr className="relative left-[530px] top-[112px] w-14 rotate-90 rounded-full border-2 border-[#bfd6d9] " />
    </div>
  );
};
