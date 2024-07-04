export default function Result({ bmr }) {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>BMR = {bmr} Calories / day</h2>
      <h5>Try dey chop make you no die !!!</h5>
    </div>
  );
}
