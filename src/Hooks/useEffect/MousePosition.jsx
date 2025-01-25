import React from "react";

const MousePosition = () => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  //Mouse event handler

  const logMousePosition = (e) => {
    //this will be logged for each mouse movement even if we provide empty array as dependency
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  //THis will run after each render i.e for each mouse movement
  //   React.useEffect(() => {
  //     console.log("useEffect: Mouse Position infinite render");
  //     window.addEventListener("mousemove", logMousePosition);
  //   });

  //THis will run only once when initial render
  //   React.useEffect(() => {
  //     console.log("useEffect: Mouse Position initial render");
  //     window.addEventListener("mousemove", logMousePosition);
  //   }, []);

  //   useEffect with clean up function
  React.useEffect(() => {
    console.log("useEffect: Mouse Position clean up");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("useEffect clean up function: component unmounting");
      window.removeEventListener("mousemove", logMousePosition);
    };
  });
  return (
    <div>
      <h2>MousePosition</h2>
      <p>
        {" "}
        MOuse Position: X - {x}, Y - {y}
      </p>
    </div>
  );
};

export default MousePosition;
