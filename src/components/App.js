import Form from "./Form";
function App() {
  return (
    <>
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
        <h1>WELCOME TO YOUR PERSONAL CALORIE CALCULATOR</h1>
        <p>Ready to take the first step towards a healthier you? </p>
        <button>Calculate your BMR Now!!!</button>
      </div>
      <Form />
    </>
  );
}

export default App;
