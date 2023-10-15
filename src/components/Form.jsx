import { useState } from "react";
import Bill from "./Bill";
import { Tip } from "./Tip";
import People from "./People";

export const Form = () => {
  //Bill component Logic
  const [bill, setBill] = useState(0);
  const changeBill = (e) => {
    setBill((prev) => {
      prev = e.target.value;
      return prev;
    });
  };

  // tip component logic
  const tipPercentages = [5, 10, 15, 25, 50];
  const [tip, setTip] = useState(0);
  function handleTip(input) {
    setTip(input);
  }
  function handleInputTip(e) {
    setTip(+e.target.value);
  }

  // people component logic
  const [peopleCount, setPeopleCount] = useState(0);
  function handlePeopleCountChange(e) {
    setPeopleCount(+e.target.value);
  }

  //form submission logic
  function handleSubmit(e) {
    e.preventDefault();
  }
  // console.log(peopleCount);

  return (
    <form onSubmit={handleSubmit}>
      <section className="input-data">
        <Bill bill={bill} handleBill={changeBill} />
        <Tip
          tipPercentages={tipPercentages}
          handleTip={handleTip}
          handleInputTip={handleInputTip}
        />
        <People
          peopleCount={peopleCount}
          handlePeopleCountChange={handlePeopleCountChange}
        />
      </section>
      <section className="result"></section>
    </form>
  );
};
