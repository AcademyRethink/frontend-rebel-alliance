import "./styles.scss";
import Button from "../Button";
import filterIcon from "../../assets/button/filterIcon.svg";
import { useState, useEffect, useContext } from "react";
import { getAPlotgByIdAndFarmID } from "../../services/plot";
import { AuthContext } from "../../controllers/contextController";

const FilterDate = () => {
  const { userData } = useContext(AuthContext);

  const SampleComponent = () => {
    // const [data, setData] = useState([]);
    // const [recentFirst, setRecentFirst] = useState(true);

    // const toggleSortOrder = () => {
    //   setRecentFirst((prevState) => !prevState);
    // };

    // useEffect(() => {
    //   getAPlotgByIdAndFarmID(userData.info.farm_id,)
    //     .then((responseData) => {
    //       const sortedData = [...responseData].sort((a, b) => {
    //         return recentFirst
    //           ? new Date(b.date) - new Date(a.date)
    //           : new Date(a.date) - new Date(b.date);
    //       });
    //       setData(sortedData);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, [recentFirst]);

    return (
      <div>
        <Button
          iconRight={filterIcon}
          className="filterButton"
          onClick={toggleSortOrder}
          text={recentFirst ? "Mais Antigo" : "Mais Recente"}
        />
        <ul>
          {data.map((item) => (
            <li key={item.id}>{`${item.name} - ${item.date}`}</li>
          ))}
        </ul>
      </div>
    );
  };
};
export default FilterDate;
