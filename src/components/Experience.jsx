import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experiencia
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* Div para la Linea */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer"
            company="MasyDase"
            companyLink="https://www.masydase.com/"
            time="2022-Presente"
            address="Villa el Salvador, Lima, Perú"
            work="Soy el encargado de la parte Frontend en MasyDase, donde desarrollo sistemas web utilizando herramientas como NextJS, Tailwind CSS y Framer Motion, entre otras. Además, tengo experiencia en el desarrollo de sitios web desde cero o mediante el uso de Wordpress. Me apasiona crear interfaces de usuario atractivas, intuitivas y funcionales que brinden la mejor experiencia posible a los usuarios. Si está buscando un desarrollador Frontend comprometido y altamente capacitado, no dude en ponerse en contacto conmigo."
          />
          <Details
            position="Frontend Developer"
            company="MasyDase"
            companyLink="https://www.masydase.com/"
            time="2022-Presente"
            address="Villa el Salvador, Lima, Perú"
            work="Soy el encargado de la parte Frontend en MasyDase, donde desarrollo sistemas web utilizando herramientas como NextJS, Tailwind CSS y Framer Motion, entre otras. Además, tengo experiencia en el desarrollo de sitios web desde cero o mediante el uso de Wordpress. Me apasiona crear interfaces de usuario atractivas, intuitivas y funcionales que brinden la mejor experiencia posible a los usuarios. Si está buscando un desarrollador Frontend comprometido y altamente capacitado, no dude en ponerse en contacto conmigo."
          />
          <Details
            position="Frontend Developer"
            company="MasyDase"
            companyLink="https://www.masydase.com/"
            time="2022-Presente"
            address="Villa el Salvador, Lima, Perú"
            work="Soy el encargado de la parte Frontend en MasyDase, donde desarrollo sistemas web utilizando herramientas como NextJS, Tailwind CSS y Framer Motion, entre otras. Además, tengo experiencia en el desarrollo de sitios web desde cero o mediante el uso de Wordpress. Me apasiona crear interfaces de usuario atractivas, intuitivas y funcionales que brinden la mejor experiencia posible a los usuarios. Si está buscando un desarrollador Frontend comprometido y altamente capacitado, no dude en ponerse en contacto conmigo."
          />
          <Details
            position="Frontend Developer"
            company="MasyDase"
            companyLink="https://www.masydase.com/"
            time="2022-Presente"
            address="Villa el Salvador, Lima, Perú"
            work="Soy el encargado de la parte Frontend en MasyDase, donde desarrollo sistemas web utilizando herramientas como NextJS, Tailwind CSS y Framer Motion, entre otras. Además, tengo experiencia en el desarrollo de sitios web desde cero o mediante el uso de Wordpress. Me apasiona crear interfaces de usuario atractivas, intuitivas y funcionales que brinden la mejor experiencia posible a los usuarios. Si está buscando un desarrollador Frontend comprometido y altamente capacitado, no dude en ponerse en contacto conmigo."
          />
          <Details
            position="Frontend Developer"
            company="MasyDase"
            companyLink="https://www.masydase.com/"
            time="2022-Presente"
            address="Villa el Salvador, Lima, Perú"
            work="Soy el encargado de la parte Frontend en MasyDase, donde desarrollo sistemas web utilizando herramientas como NextJS, Tailwind CSS y Framer Motion, entre otras. Además, tengo experiencia en el desarrollo de sitios web desde cero o mediante el uso de Wordpress. Me apasiona crear interfaces de usuario atractivas, intuitivas y funcionales que brinden la mejor experiencia posible a los usuarios. Si está buscando un desarrollador Frontend comprometido y altamente capacitado, no dude en ponerse en contacto conmigo."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
