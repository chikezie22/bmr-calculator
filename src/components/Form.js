import { useState } from "react";

export default function Form({ onSetView, onSetBmr }) {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  // const [bmr, setBmr]
  function submitForm(e) {
    e.preventDefault();
    if (isCalculated) {
      clearForm();
      return;
    }
    let BMR;
    if (!age || !sex || !height || !weight) return;
    if (sex === "male") {
      BMR = 13.397 * weight + 4.799 * height - (5.677 * age + 88.362);
    } else {
      BMR = 13.397 * weight + 4.799 * height - (5.677 * age + 88.362);
    }
    console.log(BMR);
    onSetView(true);
    onSetBmr(BMR);
    setIsCalculated(true);
  }

  function clearForm() {
    // e.preventDefault();
    setAge("");
    setSex("");
    setHeight("");
    setWeight("");
    setIsCalculated(false);
    onSetView(false);
    onSetBmr(null);
  }

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div className="form-group">
          <label>
            Age
            <input
              type="text"
              pattern="\d*"
              min="15"
              max="90"
              value={age}
              onChange={(e) =>
                setAge(e.target.validity.valid ? +e.target.value : age)
              }
              placeholder="ages 15 - 90"
            />
          </label>

          <p>ages 15 - 90</p>
        </div>

        <p>Gender</p>

        <div className="form-group">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={sex === "male"}
              onChange={(e) => setSex(e.target.value)}
            />
            Male
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={sex === "female"}
              onChange={(e) => setSex(e.target.value)}
            />
            Female
          </label>
        </div>

        <div className="form-group">
          <label>
            Height
            <input
              type="text"
              pattern="\d*"
              placeholder="height in feet's"
              value={height}
              onChange={(e) =>
                setHeight(e.target.validity.valid ? +e.target.value : height)
              }
            />
          </label>

          <p>height in feet's</p>
        </div>

        <div className="form-group">
          <label>
            Weight
            <input
              type="text"
              pattern="\d*"
              placeholder="weight in tons"
              value={weight}
              onChange={(e) =>
                setWeight(e.target.validity.valid ? +e.target.value : weight)
              }
            />
          </label>

          <p>weight in tons</p>
        </div>

        <button>{isCalculated ? "clear" : "Calculate your BMR Now!!!"}</button>
      </form>
    </>
  );
}
