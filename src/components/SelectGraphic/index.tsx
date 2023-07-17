import "./styles.scss";
import Graphic from "../Graphic";
import { useState } from "react";

const SelectGraphic = () => {
  const [selectedGraphic, setSelectedGraphic] = useState<string>("chuva");

  const handleGraphicChange = (graphicType: string): void => {
    setSelectedGraphic(graphicType);
  };

  return (
    <div className="containerSelectGraphic">
      <div className="containerButtonsSelectGraphic">
        <button
          onClick={() => handleGraphicChange("temperatura")}
          className={selectedGraphic === "temperatura" ? "selectedTemp" : ""}
        >
          Temperatura
        </button>
        <button
          onClick={() => handleGraphicChange("chuva")}
          className={selectedGraphic === "chuva" ? "selectedRain" : ""}
        >
          Chuva
        </button>
        <button
          onClick={() => handleGraphicChange("vento")}
          className={selectedGraphic === "vento" ? "selectedWind" : ""}
        >
          Vento
        </button>
      </div>
      <div className="selectedGraphic">
        {selectedGraphic === "temperatura" && (
          <Graphic
            chartData={"temp"}
            backgroundColor="#ECA900"
            unit="°"
            minY={0}
            maxY={40}
            increment={8}
          />
        )}
        {selectedGraphic === "chuva" && (
          <Graphic
            chartData={"rain"}
            backgroundColor="#004CBD"
            unit="%"
            minY={0}
            maxY={100}
            increment={20}
          />
        )}
        {selectedGraphic === "vento" && (
          <Graphic
            chartData={"wind"}
            backgroundColor="#1F78FF"
            unit="km"
            minY={0}
            maxY={50}
            increment={10}
          />
        )}
      </div>
    </div>
  );
};

export default SelectGraphic;
