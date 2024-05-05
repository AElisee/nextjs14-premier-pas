import Link from "next/link.js";

const Card = ({ user }) => {
  return (
    <div className="userCard w-[500px] p-3 mb-2 border">
      <div className="flex justify-between p-2">
        <p>{user.name}</p>
        <Link href={`utilisateur/${encodeURIComponent(user.id.toString())}`}>
          <small className="text-blue-500 underline">Contacter</small>
        </Link>
      </div>
    </div>
  );
};

export default Card;
