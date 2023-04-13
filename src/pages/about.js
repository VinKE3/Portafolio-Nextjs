import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import vinke from "../../public/images/profile/vinke.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} />;
};

const about = () => {
  return (
    <>
      <Head>
        <title>VinKe | About Page</title>
        <meta name="description" content="About Page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Pasión por la programación" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                Biografia
              </h2>
              <p className="font-medium">
                ¡Hola! Mi nombre es Kevin, y soy un desarrollador web y
                diseñador UI/UX apasionado por crear experiencias digitales
                hermosas, funcionales y centradas en el usuario. Con más de 3
                años de experiencia en este campo, me enorgullezco de estar
                siempre en busca de formas nuevas e innovadoras para dar vida a
                las visiones de mis clientes. Me encanta trabajar en proyectos
                desafiantes y estoy comprometido con la excelencia en el diseño
                y la entrega de soluciones que superen las expectativas. Si está
                buscando un desarrollador web y diseñador UI/UX comprometido, no
                dude en ponerse en contacto conmigo.
              </p>
              <p className="my-4 font-medium">
                En mi opinión, el diseño no se trata solo de hacer que las cosas
                se vean atractivas visualmente. Se trata de resolver problemas y
                crear experiencias intuitivas y agradables para los usuarios.
                Para lograr esto, es necesario tener en cuenta aspectos como la
                usabilidad, la accesibilidad y la interacción del usuario con el
                producto digital. Como diseñador, me esfuerzo por crear
                soluciones que no solo se vean bien, sino que también satisfagan
                las necesidades y deseos de los usuarios finales.
              </p>
              <p className="font-medium">
                Cuando trabajo en un proyecto, ya sea un sitio web, una
                aplicación móvil u otro producto digital, siempre me esfuerzo
                por ofrecer una calidad de diseño excepcional y un enfoque
                centrado en el usuario. Estoy ansioso por tener la oportunidad
                de aplicar mis habilidades y mi pasión en su próximo proyecto.
                ¡Trabajemos juntos para crear una experiencia digital que supere
                sus expectativas!
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark  dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={vinke}
                alt="vinke-profile"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Clientes Satisfechos
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Proyectos Realizados
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Años de Experiencia
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
