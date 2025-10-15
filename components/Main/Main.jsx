import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactTyped } from "react-typed";

export default function Main() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center text-white !px-4 !py-8">
        <h1 className="text-6xl font-bold mb-4 text-center">
          <ReactTyped
            strings={[
              "Hola! Mi nombre es <span class='text-[#4169e1]'>Juan Manuel Vilches</span>",
              "Soy desarrollador <span class='text-[#4169e1]'>Fullstack Junior</span>",
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
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
          <a href="" title="Github">
            <FontAwesomeIcon icon={faGithub} className="text-4xl" />
          </a>
          <a href="" title="Linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
          </a>
        </div>
      </main>
    </>
  );
}
