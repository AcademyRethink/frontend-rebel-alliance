import "./App.scss";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Title
        text="Teste"
        fontSize="40px"
        fontWeight="700"
        hasLine={true}
        hasIcon={true}
      />
    </>
  );
}

export default App;
