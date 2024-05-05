import { pageName } from "@/utils/utils.js";
import React from "react";
import Card from "./Card.js";

export const metadata = {
  title: `${pageName} - utilisateur`,
  description: "premier pas avec nextjs",
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );

  return res;
}

const user = async () => {
  const data = await getData();
  // console.log(data);
  return (
    <div className="center container">
      <h1 className="text-xl font-semibold text-sky-800 text-center p-4">
        LES UTILISATEURS ACTIFS !
      </h1>
      <div className="grid items-center justify-center">
        {data && data.map((user) => <Card key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default user;
