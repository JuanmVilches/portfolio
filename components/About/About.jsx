export default function About() {
  return (
    <section
      className="max-w-5xl !mx-auto scroll-mt-20 flex flex-col bg-dark-950 !p-4"
      id="acercademi"
    >
      <h2 className="text-center !p-8 text-2xl underline underline-offset-8 decoration-0 font-bold">
        Acerca de mí
      </h2>
      <div className="flex flex-col items-center md:flex-row bg-dark-950 !p-2 rounded-4xl border border-lime-200">
        <img
          src="../src/assets/fotoperfil.png"
          alt=""
          className=" h-[400px] object-cover rounded-2xl [mask-image:linear-gradient(black_80%,transparent)] [-webkit-mask-image:linear-gradient(black_70%,transparent)]"
        />
        <p className="!p-2 text-center !mt-6 md:!mt-0">
          Soy desarrollador Full Stack en constante formación con un año y medio
          dedicado intensivamente al desarrollo de software. Desde que descubrí
          mi pasión por la tecnología, completé un bootcamp de Ingeniería Full
          Stack en EducaciónIT y actualmente curso la Tecnicatura Superior en
          Desarrollo de Software en el IFTS29. Me especializo en tecnologías
          modernas como React, Node.js, MongoDB y MySQL. Busco mi primera
          oportunidad profesional en IT para aplicar mis conocimientos, seguir
          aprendiendo y contribuir en proyectos desafiantes.
        </p>
      </div>
    </section>
  );
}

// bg - purple - 950;
