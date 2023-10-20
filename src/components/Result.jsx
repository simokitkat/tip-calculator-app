/* eslint-disable react/prop-types */
export default function Result({ tipAmount, total }) {
  return (
    <section className="result">
      <div className="container">
        <div className="top">
          <div className="tip-amount">
            <div className="text">
              <h3>Tip Amount</h3>
              <span>/ person</span>
            </div>
            <span className="amount-span">${tipAmount}</span>
          </div>
          <div className="result-amount">
            <div className="text">
              <h3>Total</h3>
              <span>/ person</span>
            </div>
            <span className="result-span">${total}</span>
          </div>
        </div>
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </div>
    </section>
  );
}
