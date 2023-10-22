import { useState } from "react";

export default function useTipChange() {
  const [tipPercentages, setTipPercentages] = useState([
    { number: 5, id: 1, focusClass: "" },
    { number: 10, id: 2, focusClass: "" },
    { number: 15, id: 3, focusClass: "" },
    { number: 25, id: 4, focusClass: "" },
    { number: 50, id: 5, focusClass: "" },
  ]);

  const [tip, setTip] = useState(0);

  function handleTip(input) {
    setTip((prev) => {
      prev = input.number / 100;
      return prev;
    });
  }

  function handleTipClass(id) {
    const newArr = tipPercentages
      .map((element) => {
        element.focusClass = "";
        return element;
      })
      .map((one) => {
        if (one.id === id) {
          one.focusClass = "green";
        }
        return one;
      });

    setTipPercentages(newArr);
  }

  function handleInputTip(e) {
    setTip(e.target.value / 100);

    setTipPercentages([
      { number: 5, id: 1, focusClass: "" },
      { number: 10, id: 2, focusClass: "" },
      { number: 15, id: 3, focusClass: "" },
      { number: 25, id: 4, focusClass: "" },
      { number: 50, id: 5, focusClass: "" },
    ]);
  }

  const resetTip = () => {
    setTip(0);

    setTipPercentages([
      { number: 5, id: 1, focusClass: "" },
      { number: 10, id: 2, focusClass: "" },
      { number: 15, id: 3, focusClass: "" },
      { number: 25, id: 4, focusClass: "" },
      { number: 50, id: 5, focusClass: "" },
    ]);
  };

  return [
    tipPercentages,
    tip,
    handleTip,
    handleTipClass,
    handleInputTip,
    resetTip,
  ];
}
