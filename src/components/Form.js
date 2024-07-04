export default function Form() {
  return (
    <>
      <form action="">
        <div className="form-group">
          <label>
            Age
            <input type="text" min="15" max="90" placeholder="ages 15 - 90" />
          </label>

          <p>ages 15 - 90</p>
        </div>

        <p>Gender</p>

        <div className="form-group">
          <label htmlFor="male">
            <input type="radio" name="gender" value="male" />
            Male
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="female">
            <input type="radio" name="gender" value="female" />
            Female
          </label>
        </div>

        <div className="form-group">
          <label>
            Height
            <input type="text" placeholder="height in feet's" />
          </label>

          <p>height in feet's</p>
        </div>

        <div className="form-group">
          <label>
            Weight
            <input type="text" placeholder="weight in tons" />
          </label>

          <p>weight in tons</p>
        </div>

        <button>Calculate your BMR Now!!!</button>
      </form>
    </>
  );
}
