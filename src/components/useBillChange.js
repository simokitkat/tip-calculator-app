import { useState } from "react";

export default function useBillChange() {
  const [bill, setBill] = useState("");
  const changeBill = (e) => {
    setBill((prev) => {
      prev = e.target.value;
      return prev[0] === "0" ? prev.slice(1) : prev;
    });
  };

  const resetBill = () => setBill("");

  return [bill, changeBill, resetBill];
}
