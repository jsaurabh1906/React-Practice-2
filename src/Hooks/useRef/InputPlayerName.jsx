import React, { useRef, useState } from "react";
import { inputStyles, topDivStyles } from "../../tailwindStyles";

const InputPlayerName = () => {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const player = useRef(null);

  const handleSubmit = () => {
    setEnteredPlayerName(player.current.value);
    //below code is example of manipulating DOM where input field is cleared after submit
    player.current.value = "";
  };

  return (
    <>
      <div>
        <h2>Input Player Name</h2>

        <p>
          Demo for inputting the name of player while playing some game and
          maintain the name of player throughout
        </p>

        <div className={topDivStyles}>
          <h3>Welcome {enteredPlayerName ? enteredPlayerName : "Guest"}</h3>
          <input type="text" ref={player} className={inputStyles} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      );
    </>
  );
};

export default InputPlayerName;

//using useState hook to maintain the state of input field
// const InputPlayerName = () => {
//   const [enteredPlayerName, setEnteredPlayerName] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (event) => {
//     setSubmitted(false);
//     setEnteredPlayerName(event.target.value);
//   };
//   const handleSubmit = () => {
//     setSubmitted(true);
//   };

//   return (
//     <div>
//       <h2>Input Player Name</h2>
//       <p>
//         Demo for inputting the name of player while playing some game and
//         maintain the name of player throughout
//       </p>
//       <div className={topDivStyles}>
//         <h3>Welcome {submitted ? enteredPlayerName : "Guest"}</h3>
//         <input type="text" value={enteredPlayerName} onChange={handleChange} className={inputStyles} />
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default InputPlayerName;
