import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../controllers/contextController";
import api from "./../../services/api";
import { getStages } from "../../services/stages";
import { getFarmName } from "../../services/farm";
import TextInput from "./../Input";
import Dropdown from "../Dropdown";
import Button from "./../../components/Button";
import { Stages } from "./../../types/stageTypes";
import { PlantingType } from "../../types/plantinTypes";
import { EdidCardProps } from "../../types/editCardTypes";
import "./styles.scss";

const EditCard = ({ plantingId, handleMode }: EdidCardProps) => {
  const { userData } = useContext(AuthContext);
  const [mode, setMode] = useState("add");
  const [selectedOption, setSelectedOption] = useState("Plantio");
  const [dataPlanting, setDataPlanting] = useState<PlantingType>({
    date: "",
    saplings: undefined,
    plot: "",
    stage: "Plantio",
    user: userData.info.cpf_cnpj,
    farm: "",
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
    getStages(1).then((response) => {
      const sortedStages: Stages[] = response.sort((a, b) => a.order - b.order);
      const stageName: string[] = sortedStages.map((stage) => stage.stage);
      setOptions(stageName);
    });
    getFarmName(userData.info.farm_id).then((response) => {
      setDataPlanting((prevData) => ({
        ...prevData,
        farm: response,
      }));
    });
  }, []);

  const handleInputChange = (value: string, key: string) => {
    if (key === "saplings") {
      value = value.replace(/\D/g, "");
    }
    setDataPlanting((prevData) => ({
      ...prevData,
      [key]: key === "saplings" ? Number(value) : value,
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
    setDataPlanting((prevData) => ({
      ...prevData,
      date,
      saplings,
      plot,
      stage,
    }));
  };

  const handleButtonClick = (event: React.FormEvent) => {
    event.preventDefault();

    if (mode === "edit") {
      api
        .put(`plantings/${plantingId}`, dataPlanting)
        .then((response) => {
          console.log("Dados salvos", response.data);
          handleMode();
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
          handleMode();
        })
        .catch((error) => {
          console.error("Erro ao salvar os dados", error);
        });
    }
  };

  return (
    <form onSubmit={handleButtonClick}>
      <div className="containerEditCard">
        <div className="containerInputEditCard">
          <TextInput
            className="inputEditCard"
            label="Nome do talhão"
            value={dataPlanting.plot}
            placeHolder="Talhão"
            onChange={(event) => handleInputChange(event.target.value, "plot")}
            required={true}
          />
        </div>
        <div className="containerInputEditCard">
          <TextInput
            type="date"
            className="inputEditCard"
            label="Data do plantio"
            value={dataPlanting.date}
            placeHolder="Data"
            onChange={(event) => handleInputChange(event.target.value, "date")}
            required={true}
          />
        </div>
        <div className="containerInputEditCard">
          <TextInput
            className="inputEditCard"
            label="Mudas Plantadas"
            value={dataPlanting.saplings}
            placeHolder="Mudas"
            onChange={(event) =>
              handleInputChange(event.target.value, "saplings")
            }
            required={true}
          />
        </div>

        <div className="containerDropdownEditCard">
          <p>Etapa do Plantio</p>
          <Dropdown
            options={options}
            selectedOption={selectedOption}
            onSelect={handleSelectOption}
          />
        </div>
        <div className="containerButtonEditCard">
          <Button text="Salvar" className="normalButton" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default EditCard;
