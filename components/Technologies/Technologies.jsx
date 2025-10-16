import {
  faCss3Alt,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Technologies() {
  return (
    <section className="!p-4 max-w-5xl w-full !mx-auto !mt-4" id="habilidades">
      <h2 className="text-center !p-8 text-2xl underline underline-offset-8 decoration-0 font-bold">
        Tecnologías que utilizo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 ">
        <div className="row-start-1 row-end-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 bg-[#1b1e1d] rounded-2xl !p-4">
          <h3 className="text-center !mb-4 underline underline-offset-5">
            Frontend
          </h3>
          <div className="flex justify-evenly ">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faHtml5}
                  style={{ color: "#e44d25" }}
                  className="text-5xl"
                />
                <span>HTML</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <i className="devicon-javascript-plain colored text-5xl"></i>
                <span>JavaScript</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <i className="devicon-bootstrap-plain colored text-5xl"></i>
                <span>Bootstrap</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  style={{ color: "#2d53e5" }}
                  className="text-5xl"
                />
                <span>CSS</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ color: "#74C0FC" }}
                  className="text-5xl"
                />
                <span>React</span>
              </div>
              <div className="flex flex-col justify-center items-center rounded-xl">
                <i className="devicon-tailwindcss-original colored text-5xl"></i>
                <span>Tailwind</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-start-2 md:col-end-4 bg-[#1b1e1d] rounded-2xl !p-4">
          <h3 className="text-center !mb-4 underline underline-offset-5">
            Backend
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex flex-col justify-center items-center">
              <i className="devicon-nodejs-plain colored text-5xl"></i>
              <span>NodeJS</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <i className="devicon-mongodb-plain-wordmark colored text-5xl"></i>
              <span>MongoDB</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <i className="devicon-express-original text-5xl"></i>
              <span>Express</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <i className="devicon-mysql-plain-wordmark text-5xl"></i>
              <span>MySQL</span>
            </div>
          </div>
        </div>
        <div className="md:col-start-2 md:col-end-3 bg-[#1b1e1d] rounded-2xl !p-4">
          <h3 className="text-center !mb-4 underline underline-offset-5">
            Herramientas
          </h3>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center !p-3 rounded-xl">
              <i className="devicon-git-plain colored text-5xl"></i>
              <span>Git</span>
            </div>
            <div className="flex flex-col justify-center items-center !p-3 rounded-xl">
              <i className="devicon-github-original text-5xl"></i>
              <span>Github</span>
            </div>
            <div className="flex flex-col justify-center items-center !p-3 rounded-xl">
              <i className="devicon-postman-plain colored text-5xl"></i>
              <span>Postman</span>
            </div>
          </div>
        </div>
        <div className="md:col-start-3 md:col-end-4 bg-[#1b1e1d] rounded-2xl !p-4">
          <h3 className="text-center !mb-4 underline underline-offset-5">
            Aprendiendo
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col justify-center items-center !p-3 rounded-xl">
              <i className="devicon-nextjs-plain colored text-5xl"></i>
              <span>NextJS</span>
            </div>
            <div className="flex flex-col justify-center items-center  !p-3 rounded-xl">
              <i className="devicon-typescript-plain colored text-5xl"></i>

              <span>Typescript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
