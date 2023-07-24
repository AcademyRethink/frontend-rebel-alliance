import "./styles.scss";
import { useState } from "react";
import searchIcon from "../../assets/searchIcon.svg";
import "./styles.scss";

const PlotSearchInput = () => {
  const [plotName, setPlotName] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    console.log(searchResult);
    try {
      const response = await fetch(
        `https://backend-rebel-alliance.vercel.app/plantings?farm=1&plot=82&name=${plotName}`
      );
      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error("Erro ao buscar talhões:", error);
      setSearchResult([]);
    }
  };

  const handleIconClick = () => {
    handleSearch();
  };

  return (
    <div className="searchPlotInputContainer">
      <input
        type="text"
        value={plotName}
        onChange={(e) => setPlotName(e.target.value)}
        placeholder="Pesquisar talhão"
      />
      <button className="icon-button" onClick={handleIconClick}>
        <img src={searchIcon} alt="Ícone do talhão" />
      </button>
    </div>
  );
};

export default PlotSearchInput;
