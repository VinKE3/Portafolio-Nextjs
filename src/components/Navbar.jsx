import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease duration-300
       ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4"></CustomLink>
        <CustomLink
          href="/about"
          title="Sobre MI"
          className="mx-4"
        ></CustomLink>
        <CustomLink
          href="/projects"
          title="Proyectos"
          className="mx-4"
        ></CustomLink>
        <CustomLink
          href="/articles"
          title="Articulos"
          className="ml-4"
        ></CustomLink>
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com"
          target={"_blank"}
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-4"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target={"_blank"}
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-4"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target={"_blank"}
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-4"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target={"_blank"}
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-8 ml-4"
        >
          <PinterestIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
