import Head from "next/head.js";
import Link from "next/link.js";
import React from "react";

export const metadata = {
  title: "hellonext - blog",
  description: "De supers blogs pour rester informé",
};

const page = async () => {
  return (
    <div className="blog container">
      <h1 className="text-xl font-semibold text-sky-800">
        Bienvenue sur ElishaDev.io
      </h1>
      <h4>Le blog des amoureux de nextjs</h4>

      <div className="flex gap-5">
        <div
          className="left border p-5
        mt-5
        "
        >
          <h3 className="font-bold text-base">Lisez les articles</h3>
          <p className="text-sm pt-1 pb-1">Maximisez votre culture web</p>
          <p className="pt-1 pb-1">
            <small>
              Chaque auteur tente de vous apportez le plus de valeur possible
              par article
            </small>
          </p>
          <Link href={"/blog/liste-blog"}>
            <small className="text-blue-500 underline">Visite le blog</small>
          </Link>
        </div>
        <div
          className="right border  p-5
        mt-5"
        >
          <h3 className="font-bold text-base">
            Faites un tour vers la liste des memebres
          </h3>
          <p className="text-sm pt-1 pb-1">Faites vous des amis</p>
          <p className="pt-1 pb-1">
            <small>
              Ajoutez, invitez et discutez avec les diferents membres
            </small>
          </p>
          <Link href={"/utilisateur"}>
            <small className="text-blue-500 underline">
              Decouvrez la liste des memebres
            </small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
