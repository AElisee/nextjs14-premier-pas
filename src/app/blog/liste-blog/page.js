import Card from "./Card.js";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );

  return res;
}

const page = async () => {
  const data = await getData();
  //   console.log(data);
  return (
    <div className="container ">
      <h1 className="w-full text-center text-2xl font-semibold text-sky-800">
        Bienvenue sur le blog
      </h1>
      <div className="blog-container flex flex-wrap gap-3 justify-start mt-7">
        {data.map((article) => (
          <Card key={article.id} data={article} />
        ))}
      </div>
    </div>
  );
};

export default page;
