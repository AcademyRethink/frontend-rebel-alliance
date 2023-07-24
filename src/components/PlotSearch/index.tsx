import "./styles.scss";
import TextInput from "../Input";

const PlotSearch = () => {
  return (
    <div>
      <TextInput
        className={"TextInputDisable"}
        type="text"
        label={""}
        placeHolder={"Pesquisar talhão"}
        errorMessage={"n tem"}
      />
    </div>
  );
};

export default PlotSearch;
