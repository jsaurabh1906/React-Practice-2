import "./App.css";
import UseStateApp from "./Hooks/useState/UseStateApp";
import UseEffectApp from "./Hooks/useEffect/UseEffectApp";
import UseContextApp from "./Hooks/useContext/UseContextApp";
import UseReducerApp from "./Hooks/useReducer/UseReducerApp";
import UseRefApp from "./Hooks/useRef/UseRefApp";
import UseMemoApp from "./Hooks/useMemo/UseMemoApp";
import UseCallbackApp from "./Hooks/useCallback/UseCallbackApp";
import CustomHookApp from "./Hooks/customHooks/CustomHookApp";
import ReactRouterApp from "./React-Router6/ReactRouterApp";
import ForwardRefApp from "./Hooks/forwardRefs/ForwardRefApp";
import UseImperativeHandleApp from "./Hooks/useImperativeHandle/UseImperativeHandleApp";

function App() {
  return (
    <>
      {/* <UseStateApp /> */}
      {/* <UseEffectApp /> */}
      {/* <UseContextApp /> */}
      {/* <UseReducerApp /> */}
      {/* <UseRefApp /> */}
      {/* <UseMemoApp /> */}
      {/* <UseCallbackApp /> */}
      {/* <CustomHookApp /> */}
      {/* <ReactRouterApp /> */}
      {/* <ForwardRefApp /> */}
      <UseImperativeHandleApp />
    </>
  );
}

export default App;
