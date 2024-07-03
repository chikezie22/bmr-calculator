export default function Form() {
  return (
    <>
      <form action="">
        <label>Age</label>
        <input type="text" min="15" max="90" />
        <p>ages 15 - 90</p>

        <fieldset style={{ display: "block" }}>
          <legend>Gender</legend>

          <div>
            <input type="radio" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>

          <div>
            <input type="radio" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </fieldset>

        <label>Height</label>
        <input type="text" />
        <p>height in feet's</p>

        <label>Weight</label>
        <input type="text" />
        <p>weight in tons</p>
      </form>
    </>
  );
}
