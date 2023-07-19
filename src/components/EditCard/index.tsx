import { useState, useEffect } from "react";
import api from "./../../services/api";
import { getStages } from "../../services/stages";
import TextInput from "./../Input";
import Dropdown from "../Dropdown";
import Button from "./../../components/Button";
import { Stages } from "./../../types/stagesTypes";
import "./styles.scss";

const EditCard = ({ plantingId }: { plantingId?: string }) => {
  const [mode, setMode] = useState("add");
  const [selectedOption, setSelectedOption] = useState<string>("Plantio");
  const [dataPlanting, setDataPlanting] = useState({
    date: "",
    saplings: 0,
    plot: "",
    stage: "Plantio",
    user: "33333333333",
    farm: "Fazenda Rebel Alliance",
  });
  const [options, setOptions] = useState<Array<string>>([]);

  useEffect(() => {
    if (plantingId) {
      setMode("edit");
      api
        .get(`/plantings/${plantingId}`)
        .then((response) => {
          const data = response.data[0];
          handleDataPlanting(
            data.date.split("T")[0],
            data.saplings,
            data.plot,
            data.stage
          );
          setSelectedOption(data.stage);
        })
        .catch((error) => {
          console.error("Erro ao obter os dados do plantio", error);
        });
    }
  }, [plantingId]);

  useEffect(() => {
    getStages().then((response) => {
      const sortedStages: Stages[] = response.sort((a, b) => a.order - b.order);
      const stageName: string[] = sortedStages.map((stage) => stage.stage);
      setOptions(stageName);
    });
  }, []);

  const handleInputChange = (value: string, key: string) => {
    if (key === "saplings") {
      value = value.replace(/\D/g, "");
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

  const handleDataPlanting = (
    date: string,
    saplings: number,
    plot: string,
    stage: string
  ) => {
    setDataPlanting({
      date,
      saplings,
      plot,
      stage,
      user: "33333333333",
      farm: "Fazenda Rebel Alliance",
    });
  };

  const handleButtonClick = () => {
    if (mode === "edit") {
      api
        .put(`plantings/${plantingId}`, dataPlanting)
        .then((response) => {
          console.log("Dados salvos", response.data);
        })
        .catch((error) => {
          console.error("Erro ao salvar os dados", error);
        });
    }
    if (mode === "add") {
      api
        .post("/plantings", dataPlanting)
        .then((response) => {
          console.log("Dados salvos", response.data);
        })
        .catch((error) => {
          console.error("Erro ao salvar os dados", error);
        });
    }
  };
  if (dataPlanting.user === "") {
    return null;
  }
  return (
    <div className="containerEditCard">
      <TextInput
        className="inputEditCard"
        label="Nome do talhão"
        value={dataPlanting.plot}
        placeHolder="Talhão"
        onChange={(event) => handleInputChange(event.target.value, "plot")}
      />
      <TextInput
        type="date"
        className="inputEditCard"
        label="Data do plantio"
        value={dataPlanting.date}
        placeHolder="Data"
        onChange={(event) => handleInputChange(event.target.value, "date")}
      />
      <TextInput
        className="inputEditCard"
        label="Mudas Plantadas"
        value={dataPlanting.saplings}
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
