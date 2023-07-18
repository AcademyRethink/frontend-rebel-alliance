import { useState, useEffect } from "react";
import iconArrowGray from "./../../assets/iconArrowGray.svg";
import iconArrowBrown from "./../../assets/IconArrowBrown.svg";
import "./styles.scss";
import { getStages } from "../../services/stages";

const Dropdown = () => {
  const [options, setOptions] = useState<Array<string>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getStages().then((response) => {
      const sortedStages = response.sort((a, b) => a.order - b.order);
      const stageName = sortedStages.map((stage) => stage.stage);
      setOptions(stageName);
      setSelectedOption(stageName[0]);
    });
  }, []);

  return (
    <div className="containerDropdown">
      <div
        className={`dropdownSelect ${isOpen ? "open" : ""}`}
        onClick={handleSelectClick}
      >
        <span>{selectedOption}</span>
        {isOpen ? (
          <img src={iconArrowBrown} alt="Icone de seta para abrir" />
        ) : (
          <img src={iconArrowGray} alt="Icone de seta para abrir" />
        )}
      </div>
      {isOpen && (
        <div className="containerOptions">
          {options.map((option) => (
            <div
              key={option}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
