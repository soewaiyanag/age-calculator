import { useAgeStore } from "../state";

const DisplayAge = () => {
  const age = useAgeStore((state) => state.age);
  return (
    <div>
      <p className="tracking-widest text-5xl">{age.year ?? "--"}years</p>
      <p className="tracking-widest text-5xl">{age.month ?? "--"}months</p>
      <p className="tracking-widest text-5xl">{age.day ?? "--"}days</p>
    </div>
  );
};

export default DisplayAge;
