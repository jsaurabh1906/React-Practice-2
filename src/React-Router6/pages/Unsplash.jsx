import React from "react";
import { useLoaderData } from "react-router-dom";
import { topDivStyles } from "../../tailwindStyles";

const Unsplash = () => {
  const data = useLoaderData();

  //   const [data, setData] = React.useState([]);
  //   // "https://api.unsplash.com/photos/random?count=5&client_id=wTjhI_7L83-XHGIXKj_LOIWmyg86VaJiy-zXgPPlpGY"

  //   React.useEffect(() => {
  //     fetch(
  //       "https://api.unsplash.com/photos/random?count=1&client_id=wTjhI_7L83-XHGIXKj_LOIWmyg86VaJiy-zXgPPlpGY"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div
      className={`${topDivStyles} flex flex-col justify-center items-center`}
    >
      {data &&
        data.map((img) => (
          <>
            <img
              key={img.id}
              src={img.urls.small}
              alt={img.alt_description}
              //   width={200}
              className="rounded-md shadow-lg"
            />
            <p>Desccription: {img.alt_description}</p>
            <p>User: {img.user.first_name}</p>
          </>
        ))}
    </div>
  );
};

export default Unsplash;

export const unsplashInfoLoader = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?count=1&client_id=wTjhI_7L83-XHGIXKj_LOIWmyg86VaJiy-zXgPPlpGY"
  );
  return response.json();
};
