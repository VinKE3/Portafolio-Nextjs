import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            {" "}
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experiencia
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        {/* Div para la Linea */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
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
