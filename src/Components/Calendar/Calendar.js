import { useState } from "react";
import { getWeek } from "date-fns";
import { Header } from "./Header";
import { Days } from "./Days";
import { Cells } from "./Cells";
import { Footer } from "./Footer";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));

  const onDateClickHandle = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className="calendar">
      <Header currentMonth={currentMonth} />
      <Days currentMonth={currentMonth} />
      <Cells
        currentMonth={currentMonth}
        onDateClickHandle={onDateClickHandle}
        selectedDate={selectedDate}
      />
      <Footer
        currentWeek={currentWeek}
        setCurrentMonth={setCurrentMonth}
        currentMonth={currentMonth}
        setCurrentWeek={setCurrentWeek}
      />
    </div>
  );
};

export default Calendar;
