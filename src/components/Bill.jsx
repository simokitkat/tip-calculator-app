/* eslint-disable react/prop-types */
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
      />
    </section>
  );
}
