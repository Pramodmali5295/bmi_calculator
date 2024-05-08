import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      setErrorMsg("Please enter valid weight and height.");
      return;
    }

    const bmiValue = (weightNum / (heightNum * heightNum)) * 703;
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMsg("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMsg("You are Healthy ");
    } else {
      setMsg("You are OverWeight");
    }
    setErrorMsg("");
  };

  let Reload = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
    setBmi("");
    setMsg("");
    setErrorMsg("");
  };

  return (
    <div className="App">
      <div>
        <h2>BMI Calculator</h2>
      </div>
      <form onSubmit={calcBmi}>
        <div className="container">
          <label>Weight (in kg)</label>
          <input
            type="text"
            placeholder="Enter Your Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="container">
          <label>Height (in inches)</label>
          <input
            type="text"
            placeholder="Enter Your Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={Reload}>
            Reset
          </button>
        </div>
        {errorMsg && <p className="error">{errorMsg}</p>}
        <div>
          <h2>Your BMI is: {bmi}</h2>
          <p>{msg}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
