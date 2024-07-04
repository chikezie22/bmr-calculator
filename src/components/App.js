import Form from "./Form";
import Result from "./Result";
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
      </div>
      <Form />
      <Result />
    </>
  );
}

export default App;
