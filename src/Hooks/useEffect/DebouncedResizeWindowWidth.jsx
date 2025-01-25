import React, { useEffect, useState } from "react";

const DebouncedResizeWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [debouncedWindowWidth, setDebouncedWindowWidth] = useState(
    window.innerWidth
  );

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add an event listener for the resize event when the component mounts
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // This useEffect hook is used to debounce the windowWidth state variable
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedWindowWidth(windowWidth);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [windowWidth]);

  return (
    <div>
      <h2>Debounced Resize Window Width</h2>
      <p>Current Width: {windowWidth}</p>
      <p>Debounced Width: {debouncedWindowWidth}</p>
    </div>
  );
};

export default DebouncedResizeWindowWidth;
