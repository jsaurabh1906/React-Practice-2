import React from "react";
import SimpleCounter from "./SimpleCounter";
import CounterWithPrevState from "./CounterWithPrevState";
import UseStateWithObjects from "./UseStateWithObjects";
import UseStateWithArrays from "./UseStateWithArrays";

const MultiStepForm = () => {
  const [step, setStep] = React.useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div>
      <h2>MultiStepForm</h2>
      <div>
        <p>Current Step: {step}</p>
        <div
          style={{ margin: "10px", border: "1px solid black", padding: "10px" }}
        >
          {step === 1 && <SimpleCounter />}
          {step === 2 && <CounterWithPrevState />}
          {step === 3 && <UseStateWithObjects />}
          {step === 4 && <UseStateWithArrays />}
        </div>{" "}
        <div>
          <button onClick={prevStep} disabled={step === 1}>
            Prev
          </button>
          <button onClick={nextStep} disabled={step === 4}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
