import { notFound } from "next/navigation.js";

export const metadata = {
  title: "Hellonext - détails liste",
  description: "premier pas avec nextjs",
};

export async function generateStaticParams() {
  // faire import quand il ne s'agir pas d'un appel API
  const res = await import("./../../../data/pathsvoc.json").then((res) => res);

  return res.englishList.map((item) => ({
    liste: item.name,
  }));
}

async function getData(slug) {
  const res = await import("./../../../data/pathsvoc.json");

  const listeEncours = res.englishList.find((list) => list.name === slug);

  return listeEncours.data;
}

const ListDetail = async ({ params }) => {
  const { liste } = params;
  const data = await getData(liste);

  if (!data) {
    notFound();
  }

  return (
    <div className="p-5">
      <h2>Détails liste {liste}</h2>
      <div className="p-5">
        <table className="font-semiBold">
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-solid  rtl border border-sky-800"
              >
                <td className="p-2 border-s-2   w-[300px]">{item.fr}</td>
                <td className="p-2 text-green-800 w-[300px]">{item.en}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListDetail;
