/* eslint-disable no-unused-vars */
import { useState } from "react";
import Bill from "./Bill";
import { Tip } from "./Tip";
import People from "./People";
import Result from "./Result";
import useBillChange from "./useBillChange";
import useTipChange from "./useTipChange";
import usePeopleChange from "./usePeopleChange";

export const Form = () => {
  const [bill, changeBill, resetBill] = useBillChange();

  const [
    tipPercentages,
    tip,
    handleTip,
    handleTipClass,
    handleInputTip,
    resetTip,
  ] = useTipChange();

  const [peopleCount, handlePeopleCountChange, resetPeople] = usePeopleChange();

  //form submission logic
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!peopleCount) {
      setError("red");
    } else {
      setError("");
    }

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
    resetBill();
    resetTip();
    resetPeople();
    setTipAmount("0.00");
    setTotal("0.00");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <section className="input-data">
        <Bill bill={bill} handleBill={changeBill} />
        <Tip
          tipPercentages={tipPercentages}
          handleTip={handleTip}
          handleInputTip={handleInputTip}
          handleTipClass={handleTipClass}
        />
        <People
          peopleCount={peopleCount}
          handlePeopleCountChange={handlePeopleCountChange}
          errorClass={error}
        />
      </section>
      <Result tipAmount={tipAmount} total={total} />
    </form>
  );
};
