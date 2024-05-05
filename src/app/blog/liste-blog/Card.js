import Link from "next/link.js";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card hover:bg-slate-100 shadow-sm border min-w-[340px] w-[340px] max-w-[4000px] p-3">
      <h1 className="text-lg font-bold">{data?.title}</h1>
      <p>{data.body?.substring(1, 50)}...</p>

      <Link href={`liste-blog/${data.id.toString()}`}>
        <small className="text-blue-500 underline ">Lire ce article</small>
      </Link>
    </div>
  );
};

export default Card;
