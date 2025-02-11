import React from "react";
import { topDivStyles } from "../../../tailwindStyles";
import ScrollToTopButton from "./ScrollToTopButton";

const ScrollParent = () => {
  const btnRef = React.useRef(null);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${topDivStyles} h-screen overflow-y-scroll `}>
      <h2>Scroll To Top</h2>
      <h3 className="text-xl font-semibold text-indigo-500">
        Scroll down and use the button to scroll back up
      </h3>
      <div className="pb-24">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum natus
        minima dignissimos nostrum ab voluptates non vitae ducimus cum aperiam
        placeat doloribus modi molestias cumque omnis dolor sapiente, animi
        veniam ratione architecto repudiandae quam nesciunt esse? Aspernatur
        similique debitis nostrum laborum tempora totam deleniti, consequatur
        doloribus vel. Soluta ad delectus deleniti veniam eum odio nisi,
        nesciunt culpa debitis dolorum doloremque temporibus inventore accusamus
        aspernatur sapiente, dolores impedit maxime. Laudantium nulla suscipit
        dignissimos nisi maxime veniam commodi quos repellendus aspernatur ex
        dicta enim corporis beatae unde magni deleniti perferendis reiciendis
        vel a, voluptatibus maiores quas inventore officia modi. Possimus, ipsa
        molestiae! Quas, voluptas. Necessitatibus, voluptates. Quae, voluptate
        quibusdam. Quasi, quia. Quisquam, voluptates. Quasi, quia. Quisquam,
        voluptates. Quasi, quia. Quisquam, voluptates. Quasi, quia. Quisquam,
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat libero
        reprehenderit eius! Inventore et laborum ex, architecto vitae cumque
        autem saepe officiis amet, ut nulla rerum nemo eos ducimus error culpa!
        Nostrum fuga ratione impedit. Nisi est porro quam nesciunt! Voluptatibus
        nesciunt, illum maxime est doloribus numquam natus quam fuga, doloremque
        beatae ea quaerat impedit consequuntur ipsa velit magnam commodi
        tenetur. Quas culpa id nam atque, exercitationem beatae non voluptates
        vero quisquam distinctio doloremque, nobis maxime nesciunt odio repellat
        sit eligendi! Nesciunt rem, pariatur animi neque quo fugit nulla
        voluptatibus facere asperiores repudiandae rerum sapiente obcaecati
        facilis sed. Soluta, nulla.
      </div>
      <ScrollToTopButton ref={btnRef} onClick={handleClick} />
    </div>
  );
};

export default ScrollParent;
