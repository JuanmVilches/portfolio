export default function Projects() {
  const Tag = ({ children }) => {
    return (
      <span className="border rounded-full !p-2 bg-[#f7ff9f] text-black text-xs">
        {children}
      </span>
    );
  };

  return (
    <section className="max-w-5xl !mx-auto !mb-8 !p-4" id="proyectos">
      <h2 className="text-center !p-8 text-2xl underline underline-offset-8 decoration-0 font-bold">
        Mis proyectos
      </h2>
      <div className="flex justify-center flex-wrap gap-4">
        <article className=" max-w-[450px] !p-4 bg-[#1b1e1d] rounded-2xl">
          <div className="card-header">
            <h3 className="text-center !mb-4 text-xl">Ecommerce</h3>
            <a
              href="https://smartzonestore.netlify.app/"
              target="_blank"
              className=""
            >
              <img
                src="../public/ecommerce16.9.png"
                alt=""
                className="object-cover hover:scale-102 transition-transform duration-300"
              />
            </a>
          </div>
          <div className="card-footer !mt-6">
            <p className="">
              Fue el requisito de aprobación del bootcamp que engloba todo lo
              aprendido en el mismo. Frontend + Backend, autenticación, login,
              diseño responsive.
            </p>
            <div className="flex gap-4 flex-wrap !mt-5 items-center">
              <Tag>JavaScript</Tag>
              <Tag>React</Tag>
              <Tag>NodeJS</Tag>
              <Tag>Express</Tag>
              <Tag>MongoDB</Tag>
              <Tag>Context</Tag>
              <Tag>Mongoose</Tag>
              <Tag>Middlewares</Tag>
              <Tag>JWT</Tag>
              <Tag>API REST</Tag>
            </div>
          </div>
        </article>
        <article className=" max-w-[450px] !p-4 bg-[#1b1e1d] rounded-2xl">
          <div className="card-header">
            <h3 className="text-center !mb-4 text-xl">App de Gastos</h3>
            <a
              href="https://jmvappdegastos.netlify.app/"
              target="_blank"
              className=""
            >
              <img
                src="../public/appdegastos.png"
                alt=""
                className="object-cover hover:scale-102 transition-transform duration-300"
              />
            </a>
          </div>
          <div className="card-footer !mt-6">
            <p className="">
              Aplicación para llevar un control de gastos conectada a un backend
              de mongoDB para preservar los datos.
            </p>
            <div className="flex gap-4 flex-wrap !mt-5 items-center">
              <Tag>JavaScript</Tag>
              <Tag>React</Tag>
              <Tag>NodeJS</Tag>
              <Tag>Express</Tag>
              <Tag>MongoDB</Tag>
              <Tag>Filtros</Tag>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
