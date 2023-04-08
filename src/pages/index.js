import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio-Next.Js</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="CodeBucks"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Convirtiendo la visión en realidad con código y diseño."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                Como desarrollador full-stack, me dedico a convertir ideas en
                aplicaciones web innovadoras. Explora mis últimos proyectos y
                artículos, donde muestro mi experiencia en React.js y desarrollo
                web.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent 
                  hover:border-dark transition duration-300 ease-in-out
                "
                  download={true}
                >
                  Resumen PDF
                  <LinkArrow className={"!w-5 ml-1"} />
                </Link>
                <Link
                  href="kevin.munoz0995@gmail.com"
                  target={"_blank"}
                  className="
                ml-4 text-lg font-medium capitalize text-dark underline
                "
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="vinke" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
