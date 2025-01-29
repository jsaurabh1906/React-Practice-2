import { useState } from "react";
import "./App.css";
import UseStateApp from "./Hooks/useState/UseStateApp";
import UseEffectApp from "./Hooks/useEffect/UseEffectApp";
import UseContextApp from "./Hooks/useContext/UseContextApp";
import UseReducerApp from "./Hooks/useReducer/UseReducerApp";
import UseRefApp from "./Hooks/useRef/UseRefApp";
import UseMemoApp from "./Hooks/useMemo/UseMemoApp";
import UseCallbackApp from "./Hooks/useCallback/UseCallbackApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseStateApp /> */}
      {/* <UseEffectApp /> */}
      {/* <UseContextApp /> */}
      {/* <UseReducerApp /> */}
      {/* <UseRefApp /> */}
      {/* <UseMemoApp /> */}
      <UseCallbackApp />
    </>
  );
}

export default App;
