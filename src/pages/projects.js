import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, tittle, sumary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border
    border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light"
    >
      {/* Div para el background */}
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={tittle}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-lg">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {tittle}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{sumary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ tittle, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border
    border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={tittle}
          className="w-full h-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-lg">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{tittle}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>VinKe | Projects Page</title>
        <meta name="description" content="Projects Page" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout classname="pt-16">
          <AnimatedText
            text="La imaginación supera al conocimiento"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                tittle="Cripto Screener App"
                img={project1}
                sumary="Estoy trabajando en una aplicación innovadora y fácil de usar para todos los entusiastas de las criptomonedas y del trading. La aplicación está diseñada para proporcionar una experiencia de usuario intuitiva y accesible, sin importar el nivel de experiencia con las criptomonedas. Nuestra plataforma utiliza tecnología avanzada y soluciones de seguridad sólidas para garantizar la protección de los activos y transacciones de nuestros usuarios. Si está buscando una forma segura y sencilla de invertir en criptomonedas, ¡nuestra aplicación es la elección perfecta! "
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                tittle="Cripto Screener App"
                img={project1}
                sumary="aplicacion de criptos inovadora y facil de usar para todos los usuarios de criptomonedas y que les guste el trading de criptomonedas. "
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                tittle="Cripto Screener App"
                img={project1}
                sumary="aplicacion de criptos inovadora y facil de usar para todos los usuarios de criptomonedas y que les guste el trading de criptomonedas. "
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                tittle="Cripto Screener App"
                img={project1}
                sumary="Estoy trabajando en una aplicación innovadora y fácil de usar para todos los entusiastas de las criptomonedas y del trading. La aplicación está diseñada para proporcionar una experiencia de usuario intuitiva y accesible, sin importar el nivel de experiencia con las criptomonedas. Nuestra plataforma utiliza tecnología avanzada y soluciones de seguridad sólidas para garantizar la protección de los activos y transacciones de nuestros usuarios. Si está buscando una forma segura y sencilla de invertir en criptomonedas, ¡nuestra aplicación es la elección perfecta! "
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                tittle="Cripto Screener App"
                img={project1}
                sumary="aplicacion de criptos inovadora y facil de usar para todos los usuarios de criptomonedas y que les guste el trading de criptomonedas. "
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                tittle="Cripto Screener App"
                img={project1}
                sumary="aplicacion de criptos inovadora y facil de usar para todos los usuarios de criptomonedas y que les guste el trading de criptomonedas. "
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
