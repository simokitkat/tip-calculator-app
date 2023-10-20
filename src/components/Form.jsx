/* eslint-disable no-unused-vars */
import { useState } from "react";
import Bill from "./Bill";
import { Tip } from "./Tip";
import People from "./People";
import Result from "./Result";

export const Form = () => {
  //Bill component Logic
  const [bill, setBill] = useState("");
  const changeBill = (e) => {
    setBill((prev) => {
      prev = e.target.value;
      return prev[0] === "0" ? prev.slice(1) : prev;
    });
  };

  // tip component logic
  const tipPercentages = [5, 10, 15, 25, 50];
  const [tip, setTip] = useState(0);
  function handleTip(input) {
    setTip((prev) => {
      prev = input / 100;
      return prev;
    });
  }
  function handleInputTip(e) {
    setTip(e.target.value / 100);
  }

  // people component logic
  const [peopleCount, setPeopleCount] = useState("");
  function handlePeopleCountChange(e) {
    setPeopleCount((prev) => {
      prev = e.target.value;
      return prev[0] === "0" ? prev.slice(1) : prev;
    });
  }

  //form submission logic
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  function handleSubmit(e) {
    e.preventDefault();
    if (bill && tip && peopleCount) {
      setTipAmount((prev) => {
        prev = ((bill * tip) / peopleCount).toFixed(2);
        return prev;
      });

      setTotal((prev) => {
        prev = ((+bill + bill * tip) / peopleCount).toFixed(2);
        return prev;
      });
    }
  }

  //form reset logic
  const handleReset = () => {
    setBill("");
    setTip(0);
    setPeopleCount("");
    setTipAmount("0.00");
    setTotal("0.00");
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
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
      <Result tipAmount={tipAmount} total={total} />
    </form>
  );
};
