import Image from "next/image";
import img_1 from "./../../public/assets/img_1.jpg";
import img_2 from "./../../public/assets/img_2.jpg";
import img_3 from "./../../public/assets/img_3.jpg";

// head
export const metadata = {
  title: "hellonext - Acceuil",
  description: "premier pas avec nextjs",
};

// obtenir les datas
async function getData() {
  const res = await import("./../data/vocabulary.json");

  return res;
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <div>
        <div>
          <h1 className="text-4xl text-sky-800 font-bold p-5">Hello nextjs</h1>
        </div>

        <div className="images pb-5">
          <div className="img_1">
            <Image src={img_1} placeholder="blur" alt="img_1" />
          </div>

          <div className="img_2">
            <Image src={img_2} placeholder="blur" alt="img_2" />
          </div>
          <div className="img_3">
            <Image className="img" src={img_3} placeholder="blur" alt="img_3" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semiBold text-sky-700 p-5 underline">
            Obtenir des données d'une API
          </h2>

          <div className="p-5">
            <table className="font-semiBold">
              <tbody>
                {data.vocabulary.map((item, index) => (
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
      </div>
    </>
  );
}
