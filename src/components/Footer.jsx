import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Layout className="py-8 flex items-center justify-between">
        <span>
          {new Date().getFullYear()} &copy; Todos los Derechos Reservados
        </span>
        <div className="flex items-center">
          Designed By <span> {""}</span>
          <Link href="/" className="underline mx-2">
            VinKE
          </Link>{" "}
          <span
            className="
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
