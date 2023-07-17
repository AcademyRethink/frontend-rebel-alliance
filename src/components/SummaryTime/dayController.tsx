import { getDateObject } from "../../utils/weatherFunctions";

const DayController = () => {
  const { dayOfWeekText, day, monthText, year } = getDateObject();

  return (
    <>
      {dayOfWeekText}, {day} de {monthText} de {year}
    </>
  );
};

export default DayController;
