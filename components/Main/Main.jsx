import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactTyped } from "react-typed";

export default function Main() {
  return (
    <>
      <nav className="!mt-4 flex justify-center">
        <ul className="flex gap-6 list-none">
          <li className="text-white list-none flex items-center cursor-pointer group ml-0 first:ml-8">
            <a
              href="#aboutme"
              className="relative transition-all duration-400 no-underline text-white hover:text-[#4169e1] after:content-[''] after:absolute after:bg-[#4169e1] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:origin-center after:w-0 after:h-[1px] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:scale-x-100"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="relative transition-all duration-400 no-underline text-white hover:text-[#4169e1] after:content-[''] after:absolute after:bg-[#4169e1] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:origin-center after:w-0 after:h-[1px] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:scale-x-100"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative transition-all duration-400 no-underline text-white hover:text-[#4169e1] after:content-[''] after:absolute after:bg-[#4169e1] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:origin-center after:w-0 after:h-[1px] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:scale-x-100"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <main className="h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4 text-center">
          <ReactTyped
            strings={[
              "Hi nice to meet you! <span class='text-[#4169e1]'>I'm Juan Manuel Vilches</span>",
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </h1>

        <div className="w-full text-center !mt-16 flex items-center justify-center">
          <a
            href="mailto:juanmanuelvilches99@gmail.com"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 text-white !px-6 !py-3 rounded-2xl transition !mr-4"
          >
            Send me an email!
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
