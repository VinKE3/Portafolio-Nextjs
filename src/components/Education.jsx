import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Formacion
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* Div para la Linea */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Capacitacion en C#"
            time="2022 - Presente"
            place="MasyDase"
            info="Capacitacion en C# realizada en MasyDase, en este curso aprenderás los conceptos y la sintaxis del lenguaje desarrollado por Microsoft C#. A través del Framework .NET aprenderás el circuito completo que debe hacer un programador para poder llevar a cabo el back end de una Aplicación Web."
          />
          <Details
            type="Curso de React"
            time="2021-2022"
            place="CoderHouse"
            info="En este curso, que es el tercer nivel de la carrera de programación, aprenderás a programar por componentes, mediante Javascript, JS, ES6, y también conocerás las ventajas de la utilización del flujos de datos. Asimismo, aplicarás el manejo de rutas utilizando Firebase, y comprenderás la utilización del virtual DOM mediante los desarrollos de React JS. Al finalizar, podrás crear tus propias aplicaciones SPA, y estarás en condiciones de hacer cualquier desarrollo con uno de los frameworks más populares y avanzados del momento.
            "
          />
          <Details
            type="Curso de JavaScript"
            time="2021-2022"
            place="CoderHouse"
            info="En este curso aprenderás los fundamentos del lenguaje de programación más usado en la actualidad, con el cual es posible crear aplicaciones de todo tipo. Explorarás inicialmente herramientas propias del mismo, indagando casos prácticos de aplicación. Reconocerás la utilidad de las librerías estudiando jQuery, y cómo aplicar técnicas de desarrollo para apps modernas con AJAX. Al graduarte, estarás en condiciones de crear soluciones web interactivas, y trasladar los conocimientos del curso a cualquier framework JavaScript."
          />
          <Details
            type="Curso de Desarrollo Web"
            time="2021-2022"
            place="CoderHouse"
            info="En este curso aprenderás a crear tu sitio web partiendo del prototipo en papel. Te sumergirás en las mejores prácticas del desarrollo web, trabajando con HTML y CSS. Conocerás herramientas para optimizar al máximo tu sitio web, implementando prácticas de versionado de código con GIT, y preprocesadores como SASS. Al finalizar, sabrás cómo aplicar Bootstrap a tus proyectos, y comprenderás lo importante del SEO en tus desarrollos. Subirás tu sitio a un servidor, y aprenderás a interactuar con este servicio. También sabrás cómo presentar un presupuesto y atender a tu cliente final."
          />
          <Details
            type="Ingenieria en Sistemas"
            time="2018-Presente"
            place="Univerdad Tecnologica Nacional Buenos Aires"
            info="Amplio campo de acción de un Ingeniero en Sistemas de Información, su adaptación a las necesidades del mercado, su desempeño en desarrollo, el perfil gerencial, de negocios, el emprendedor, la diferencia con Informática."
          />
          <Details
            type="Curso de ingles semi-avanzado"
            time="2016-2018"
            place="Instituto de Ingles San Fernando"
            info="English Academy es la nueva iniciativa de Coderhouse para que mejores tu nivel de inglés enfocado en tu área de expertise.
Creamos English Academy para profesionales del mundo de la tecnología. Ofrecemos: inglés para Desarrollo, Marketing y Diseño.
Los interesados en la propuesta, deberán completar un test para ver en qué nivel se ubican."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
