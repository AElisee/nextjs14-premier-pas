import { pageName } from "@/utils/utils.js";
import React from "react";

export const metadata = {
  title: `${pageName} - produits`,
  description: "premier pas avec nextjs",
};

const produits = () => {
  return (
    <div>
      <h1>Liste des produits</h1>
    </div>
  );
};

export default produits;
