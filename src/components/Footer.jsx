import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>
          {new Date().getFullYear()} &copy; Todos los Derechos Reservados
        </span>
        <div className="flex items-center lg:py-2">
          Designed By <span> {""}</span>
          <Link href="/" className="underline mx-2">
            VinKE
          </Link>{" "}
          <span
            className="
            dark:text-primaryDark
        text-primary text-2xl
        "
          >
            &#9825;{" "}
          </span>
        </div>
        <Link href="/">Redes</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
