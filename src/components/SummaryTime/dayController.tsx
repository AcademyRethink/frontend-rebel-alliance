const DayController = () => {
  const dayOfWeek: string[] = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const month: string[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const today: Date = new Date();
  const dayOfWeekText: string = dayOfWeek[today.getDay()];
  const day: number = today.getDate();
  const monthText: string = month[today.getMonth()];
  const year: number = today.getFullYear();

  return (
    <>
      {dayOfWeekText}, {day} de {monthText} de {year}
    </>
  );
};

export default DayController;
