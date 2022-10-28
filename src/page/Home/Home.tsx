import React from "react";

function Home() {
  return (
    <div className="h-[calc(100vh-171px)] xs:h-[calc(100vh-219px)] sm:h-[calc(100vh-215px)] md:h-[calc(100vh-227px)]">
      <div className="h-[calc(40vh-76px)] sm:h-[calc(60vh-76px)] bg-[url('@assets/images/background.webp')] bg-no-repeat bg-cover bg-top relative rounded-md shadow-sm">
        <div
          className="text-sm md:text-3xl xl:text-4xl uppercase font-semibold absolute sm:bottom-9 bg-transparent bg-slate-50
        px-4 py-2 rounded-r-lg shadow-sm sm:shadow-md sm:w-max font-elsie bottom-0 right-0 left-0 text-center">Bienvenidos</div>
      </div>
      <section className="pt-5 sm:pt-8 sm:text-xl lg:pt-12 md:text-2xl md:w-5/6 xl:w-2/3 md:mx-auto text-justify">Somos un grupo que se unió para traducir novelas ligeras, este trabajo que realizamos es porque nos gusta las novelas, que las realizamos en nuestro tiempo,
        además de brindarles a los fanáticos de este género la oportunidad de disfrutar de estas historias.</section>

    </div>
  );
}

export default Home;
