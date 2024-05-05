export const generateStaticParams = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );

  return res.map((user) => ({
    user: user.id.toString(),
  }));
};

async function getData(slug) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );

  const thisUser = res.find((user) => user.id.toString() === slug);

  return thisUser;
}

const userDetails = async ({ params }) => {
  const { user } = params;
  const thisUser = await getData(user);

  return (
    <div className="user container flex justify-center">
      <div className="border p-4 w-[500px]">
        <p className="text-center text-lg font-semibold text-sky-700">
          {thisUser.name}
        </p>
        <p className="text-base text-center">
          Username : <i>{thisUser.username}</i>{" "}
        </p>
        <div className="pt-5">
          <p className="border rounded-md p-1 mt-1">
            E-mail: <i> {thisUser.email}</i>
          </p>
          <p className="border rounded-md p-1 mt-1">
            Website: <i>{thisUser.website} </i>
          </p>
          <p className="border rounded-md p-1 mt-1">
            Téléphone:<i> {thisUser.phone} </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default userDetails;
