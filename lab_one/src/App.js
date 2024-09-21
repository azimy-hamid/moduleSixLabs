import Greeting from "./components/Greetings";

function App() {
  return (
    <>
      <Greeting name="Mate">
        Greeting component with children and a name prop
      </Greeting>
      <hr />
      <Greeting>Greeting component with children but no name prop</Greeting>
      <hr />
      {/* Greeting component with only name prop */}
      <Greeting name="Haamed"></Greeting>
      <hr />
      {/* Greeting component without any children and no name prop */}
      <Greeting></Greeting>
    </>
  );
}

export default App;
