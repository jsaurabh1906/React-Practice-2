import React from "react";
import useFetch from "../implementation/useFetch";
import { topDivStyles } from "../../../../tailwindStyles";

const ImageGallery = () => {
  const [data, loading, error] = useFetch(
    "https://api.unsplash.com/photos/random?count=5&client_id=wTjhI_7L83-XHGIXKj_LOIWmyg86VaJiy-zXgPPlpGY"
  );

  if (loading) return <h2>Loading images...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div className={topDivStyles}>
      <h2>Random Image Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        {data &&
          data.map((img) => (
            <img
              key={img.id}
              src={img.urls.small}
              alt={img.alt_description}
              width={200}
              className="rounded-md shadow-lg"
            />
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
