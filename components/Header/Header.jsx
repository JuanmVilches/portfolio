import React from "react";

export default function Header() {
  return (
    <header className="md:block hidden sticky top-0 z-0 backdrop-blur-xs">
      <nav>
        <ul className="flex gap-8 justify-center items-center h-[50px] text-md ">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#acercademi">Acerca de mi</a>
          </li>
          <li>
            <a href="#habilidades">Tecnologías</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
