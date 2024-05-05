"use client";
import { useState } from "react";

const TextEffect = () => {
  let [state, setstate] = useState("Jour");

  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  const getRandomDay = () => {
    const randomIndex = Math.floor(Math.random() * days.length);
    setstate(days[randomIndex]);
  };

  return (
    <div className="my-4 ">
      <h2 className="text-semBold text-sky-800 py-2">
        Importer un composant Client dans un composant serveur.
      </h2>
      <button
        className="border px-4 py-1 border-cyan-700 w-[150px] rounded-lg shadow-md"
        onClick={() => getRandomDay()}
      >
        {state}
      </button>
      <span>
        {" "}
        <small> Cliquez sur le boutton pour définir un jour aléatoire.</small>
      </span>
    </div>
  );
};

export default TextEffect;
