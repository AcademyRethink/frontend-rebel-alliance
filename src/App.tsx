import "./App.scss";
import TextInput from "./components/Input";

function App() {
  return (
    <>
      <TextInput
        className="Default"
        label="Label"
        placeHolder="Placeholder"
        errorMessage="Mensagem de erro"
      />
    </>
  );
}

export default App;
