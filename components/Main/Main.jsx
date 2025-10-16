import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main() {
  return (
    <>
      <main
        className="h-[700px] flex flex-col justify-center items-center text-white !px-4 !py-8  bg-[#1b1e1d] "
        id="inicio"
      >
        <div>
          <a
            href="/CV.pdf"
            target="_blank"
            className="flex gap-2 justify-center items-center border border-[#f7ff9f] rounded-2xl !p-4 !mb-16"
          >
            <FontAwesomeIcon icon={faFileArrowDown} />
            <span>Descargar CV</span>
          </a>
        </div>
        <h1 className="text-5xl font-bold !mb-4 text-center">
          Juan Manuel Vilches
        </h1>
        <h1 className="text-5xl font-bold mb-4 text-center text-[#f7ff9f]">
          Desarrollador de Software
        </h1>

        <div className="w-full text-center !mt-16 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0">
          <a
            href="mailto:juanmanuelvilches99@gmail.com"
            title="Enviame un mail haciendo click aquí"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 text-white !px-6 !py-3 rounded-2xl transition md:!mr-4"
          >
            Enviame un mail!
          </a>
          <a
            href=""
            title="Github"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="text-4xl" />
          </a>
          <a
            href=""
            title="Linkedin"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
          </a>
        </div>
      </main>
    </>
  );
}
