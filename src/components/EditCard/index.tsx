import { useState, useEffect } from "react";
import api from "./../../services/api";
import { getStages } from "../../services/stages";
import TextInput from "./../Input";
import Dropdown from "../Dropdown";
import Button from "./../../components/Button";
import { Stages } from "./../../types/stagesTypes";
import "./styles.scss";

const EditCard = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [dataPlanting, setDataPlanting] = useState({
    date: "",
    saplings: 0,
    plot: "",
    stage: "Plantio",
    user: "33333333333",
    farm: "Fazenda Rebel Alliance",
  });
  const [options, setOptions] = useState<Array<string>>([]);

  const handleInputChange = (value: string | number, key: string) => {
    if (key === "saplings") {
      value = Number(value);
    }
    setDataPlanting((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setDataPlanting((prevData) => ({
      ...prevData,
      stage: option,
    }));
  };

  useEffect(() => {
    getStages().then((response) => {
      const sortedStages: Stages[] = response.sort((a, b) => a.order - b.order);
      const stageName: string[] = sortedStages.map((stage) => stage.stage);
      setOptions(stageName);
      setSelectedOption(stageName[0]);
    });
  }, []);

  const handleButtonClick = () => {
    console.log(dataPlanting);
    api
      .post("/plantings", dataPlanting)
      .then((response) => {
        console.log("Dados salvos", response.data);
      })
      .catch((error) => {
        console.error("Erro ao salvar os dados", error);
      });
  };

  return (
    <div className="containerEditCard">
      <TextInput
        className="inputEditCard"
        label="Nome do talhão"
        placeHolder="Talhão"
        onChange={(event) => handleInputChange(event.target.value, "plot")}
      />
      <TextInput
        type="date"
        className="inputEditCard"
        label="Data do plantio"
        placeHolder="Data"
        onChange={(event) => handleInputChange(event.target.value, "date")}
      />
      <TextInput
        type="number"
        className="inputEditCard"
        label="Mudas Plantadas"
        placeHolder="Mudas"
        onChange={(event) => handleInputChange(event.target.value, "saplings")}
      />
      <div className="containerDropdownEditCard">
        <span>Etapa do Plantio</span>
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelectOption}
        />
      </div>
      <div className="containerButtonEditCard">
        <Button
          text="Salvar"
          onClick={handleButtonClick}
          className="normalButton"
        />
      </div>
    </div>
  );
};

export default EditCard;
