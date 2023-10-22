import { useState } from "react";

export default function usePeopleChange() {
  const [peopleCount, setPeopleCount] = useState("");

  function handlePeopleCountChange(e) {
    setPeopleCount((prev) => {
      prev = e.target.value;
      return prev[0] === "0" ? prev.slice(1) : prev;
    });
  }

  const resetPeople = () => setPeopleCount("");

  return [peopleCount, handlePeopleCountChange, resetPeople];
}
