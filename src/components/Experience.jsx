import React from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            {" "}
            @{company}
          </a>
        </h3>
        <span>
          {time} - {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experiencia
      </h2>
      <div className="w-[75%] mx-auto relative">
        {/* Div para la Linea */}
        <div className=" absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Frontend Developer"
            company="MasyDase"
            companyLink="https://www.masydase.com/"
            time="2022-Presente"
            address="Villa el Salvador, Lima, Perú"
            work="Encargado de la parte Frontend de sistemas webs desarrollados por MasyDase, utilizando NextJS, Tailwind CSS, Framer Motion, entre otros, asi como tambien el desarrollo de paginas web desde cero o mediante Wordpress."
          />
          <Details
            position="Frontend Developer"
            company="MasyDase"
            companyLink="https://www.masydase.com/"
            time="2022-Presente"
            address="Villa el Salvador, Lima, Perú"
            work="Encargado de la parte Frontend de sistemas webs desarrollados por MasyDase, utilizando NextJS, Tailwind CSS, Framer Motion, entre otros, asi como tambien el desarrollo de paginas web desde cero o mediante Wordpress."
          />
          <Details
            position="Frontend Developer"
            company="MasyDase"
            companyLink="https://www.masydase.com/"
            time="2022-Presente"
            address="Villa el Salvador, Lima, Perú"
            work="Encargado de la parte Frontend de sistemas webs desarrollados por MasyDase, utilizando NextJS, Tailwind CSS, Framer Motion, entre otros, asi como tambien el desarrollo de paginas web desde cero o mediante Wordpress."
          />
          <Details
            position="Frontend Developer"
            company="MasyDase"
            companyLink="https://www.masydase.com/"
            time="2022-Presente"
            address="Villa el Salvador, Lima, Perú"
            work="Encargado de la parte Frontend de sistemas webs desarrollados por MasyDase, utilizando NextJS, Tailwind CSS, Framer Motion, entre otros, asi como tambien el desarrollo de paginas web desde cero o mediante Wordpress."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
