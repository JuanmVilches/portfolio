import {
  faCss3Alt,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Technologies() {
  return (
    <section
      className=" bg-cyan-950 flex justify-center items-center gap-4 flex-wrap !p-4 max-w-5xl w-full !mx-auto !my-4"
      id="technologies"
    >
      <div className="flex flex-col justify-center items-center">
        <FontAwesomeIcon
          icon={faReact}
          style={{ color: "#74C0FC" }}
          className="text-5xl"
        />
        <span>React</span>
      </div>
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
        <i class="devicon-mongodb-plain-wordmark colored text-5xl"></i>
        <span>MongoDB</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <i class="devicon-mysql-plain-wordmark text-5xl"></i>
        <span>MySQL</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <i class="devicon-bootstrap-plain colored text-5xl"></i>
        <span>Bootstrap</span>
      </div>
      <div className="flex flex-col justify-center items-center border-2 !p-3 rounded-xl border-black">
        <i class="devicon-tailwindcss-original colored text-5xl"></i>
        <span>Tailwind</span>
      </div>
      <div className="flex flex-col justify-center items-center border-2 !p-3 rounded-xl border-black">
        <i class="devicon-git-plain colored text-5xl"></i>
        <span>Git</span>
      </div>
    </section>
  );
}
