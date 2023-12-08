import InputField from "./Components/InputField";
import DisplayAge from "./Components/DisplayAge";
import { useAgeStore, useDayStore, useMonthStore, useYearStore } from "./state";

function App() {
  const day = useDayStore((state) => state.day);
  const month = useMonthStore((state) => state.month);
  const year = useYearStore((state) => state.year);
  const setDay = useDayStore((state) => state.setDay);
  const setMonth = useMonthStore((state) => state.setMonth);
  const setYear = useYearStore((state) => state.setYear);
  const setAge = useAgeStore((state) => state.setAge);

  const handleInputChange = (setter) => (event) => {
    const newValue = event.target.value;
    setter(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDay = date.getDate();
    setAge(currentYear, currentMonth, currentDay);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex gap-4">
            <InputField
              label={"DAY"}
              id="day-input"
              placeholder={"DD"}
              pattern={"^(0[1-9]|[1-2][0-9]|3[0-1])$"}
              value={day}
              onChange={handleInputChange(setDay)}
            />
            <InputField
              label={"MONTH"}
              id="month-input"
              placeholder={"MM"}
              pattern={"^(0[1-9]|1[0-2])$"}
              value={month}
              onChange={handleInputChange(setMonth)}
            />
            <InputField
              label={"YEAR"}
              id="year-input"
              placeholder={"YYYY"}
              pattern={"^\\d{4}$"}
              value={year}
              onChange={handleInputChange(setYear)}
            />
          </div>
          <div className="w-screen flex justify-center items-center">
            <span className="h-0.5 bg-gray-300 w-full block"></span>
            <button
              className="bg-purple-600 rounded-full p-4 cursor-pointer"
              type="submit"
            >
              <img src="/assets/images/icon-arrow.svg" alt="Arrow Icon" />
            </button>
          </div>
        </div>
      </form>
      <DisplayAge />
    </div>
  );
}

export default App;
