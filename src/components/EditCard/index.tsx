import React, { useState, useEffect } from "react";
import { getStages } from "../../services/stages";
import TextInput from "./../Input";
import Dropdown from "../Dropdown";
import "./styles.scss";
import { Stages } from "./../../types/stagesTypes";

const EditCard = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [dataPlanting, setDataPlanting] = useState({
    talhao: "",
    data: "",
    mudas: "",
    etapa: "",
  });
  const [options, setOptions] = useState<Array<string>>([]);

  const handleInputChange = (value: string, key: string) => {
    setDataPlanting((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setDataPlanting((prevData) => ({
      ...prevData,
      etapa: option,
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
  };

  return (
    <div className="containerEditCard">
      <TextInput
        className="inputEditCard"
        label="Nome do talhão"
        placeHolder="Talhão"
        onChange={(event) => handleInputChange(event.target.value, "talhao")}
      />
      <TextInput
        className="inputEditCard"
        label="Data do plantio"
        placeHolder="Data"
        onChange={(event) => handleInputChange(event.target.value, "data")}
      />
      <TextInput
        className="inputEditCard"
        label="Mudas Plantadas"
        placeHolder="Mudas"
        onChange={(event) => handleInputChange(event.target.value, "mudas")}
      />
      <div className="containerDropdownEditCard">
        <span>Etapa do Plantio</span>
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelectOption}
        />
      </div>
      <button onClick={handleButtonClick}>Teste</button>
    </div>
  );
};

export default EditCard;
