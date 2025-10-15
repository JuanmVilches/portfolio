import {
  faCss3Alt,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Technologies() {
  return (
    <section className="!p-4 max-w-5xl w-full !mx-auto !my-4" id="technologies">
      <h2 className="text-center !p-8 text-2xl underline underline-offset-8 decoration-1 font-bold">
        Tecnologías que utilizo
      </h2>
      <div className="flex flex-wrap itemx-center justify-center gap-8  bg-blue-950 !p-8 rounded-4xl">
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "#e44d25" }}
            className="text-5xl"
          />
          <span>HTML</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faCss3Alt}
            style={{ color: "#2d53e5" }}
            className="text-5xl"
          />
          <span>CSS</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <i class="devicon-javascript-plain colored text-5xl"></i>
          <span>JavaScript</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "#74C0FC" }}
            className="text-5xl"
          />
          <span>React</span>
        </div>
        <div className="flex flex-col justify-center items-center !p-3 rounded-xl">
          <i class="devicon-git-plain colored text-5xl"></i>
          <span>Git</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <i class="devicon-bootstrap-plain colored text-5xl"></i>
          <span>Bootstrap</span>
        </div>
        <div className="flex flex-col justify-center items-center !p-3 rounded-xl">
          <i class="devicon-tailwindcss-original colored text-5xl"></i>
          <span>Tailwind</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <i class="devicon-mongodb-plain-wordmark colored text-5xl"></i>
          <span>MongoDB</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <i class="devicon-mysql-plain-wordmark text-5xl"></i>
          <span>MySQL</span>
        </div>
      </div>
      <h2 className="text-center !p-8 text-2xl underline underline-offset-8 decoration-1 font-bold">
        Actualmente aprendiendo
      </h2>
      <div className="flex flex-wrap itemx-center justify-center gap-8  bg-blue-950 !p-6 rounded-4xl">
        <div className="flex flex-col justify-center items-center !p-3 rounded-xl">
          <i class="devicon-nextjs-plain colored text-5xl"></i>
          <span>NextJS</span>
        </div>
        <div className="flex flex-col justify-center items-center  !p-3 rounded-xl">
          <i class="devicon-typescript-plain colored text-5xl"></i>

          <span>Typescript</span>
        </div>
      </div>
    </section>
  );
}
