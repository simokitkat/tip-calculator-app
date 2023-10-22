/* eslint-disable react/prop-types */
import dollar from "../assets/images/icon-dollar.svg";

export default function Bill({ bill, handleBill }) {
  return (
    <section className="bill">
      <h1>Bill</h1>
      <input
        type="number"
        name="bill"
        id="bill"
        value={bill}
        onChange={handleBill}
        placeholder="0"
        min={0}
        required
      />
      <img src={dollar} alt="icon-dollar" className="dollar" />
    </section>
  );
}
