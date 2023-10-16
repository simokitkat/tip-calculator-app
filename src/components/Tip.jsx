/* eslint-disable react/prop-types */
export const Tip = ({ tipPercentages, handleTip, handleInputTip }) => {
  return (
    <section className="tip">
      <h2>Select Tip %</h2>
      <div className="tip__grid">
        {tipPercentages.map((percent, i) => {
          return (
            <button
              key={i}
              onClick={() => handleTip(percent)}
              type="button"
              className="green"
            >
              {percent}%
            </button>
          );
        })}
        <input
          type="number"
          name="tip"
          id="tip"
          onChange={handleInputTip}
          placeholder="custom"
        />
      </div>
    </section>
  );
};
