import Link from "next/link.js";
import React from "react";

// head
export const metadata = {
  title: "Hellonext - lites",
  description: "premier pas avec nextjs",
};

async function getData() {
  const res = await import("./../../data/pathsvoc.json");

  return res;
}

const page = async () => {
  const data = await getData();
  const array = data.englishList;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semiBold pb-3">
        Les liste de vocabularaire
      </h2>
      <div className="">
        <ul className="w-[400px]">
          {array.map((item, index) => (
            <li key={index} className="p-2 border-2 border-slate-500">
              <Link
                className="capitalize"
                href={`listes/${encodeURIComponent(item.name)}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
