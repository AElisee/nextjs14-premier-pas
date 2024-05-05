export const generateStaticParams = async () => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (response) => response.json()
  );

  return result.map((article) => ({
    article: article.id.toString(),
  }));
};

async function getData(id) {
  const thisarticle = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((response) => response.json());

  return thisarticle;
}

const page = async ({ params }) => {
  const { articleId } = params;
  const data = await getData(articleId);

  return (
    <div className="details container ">
      <h2 className="text-center text-xl font-semibold text-sky-700">
        {data.title}
      </h2>
      <p className="">{data.body}</p>
    </div>
  );
};

export default page;
