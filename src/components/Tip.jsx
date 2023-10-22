/* eslint-disable react/prop-types */
export const Tip = ({
  tipPercentages,
  handleTip,
  handleInputTip,
  handleTipClass,
}) => {
  return (
    <section className="tip">
      <h2>Select Tip %</h2>
      <div className="tip__grid">
        {tipPercentages.map((percent) => {
          return (
            <button
              key={percent.id}
              onClick={() => {
                handleTip(percent);
                handleTipClass(percent.id);
              }}
              type="button"
              className={percent.focusClass}
            >
              {percent.number}%
            </button>
          );
        })}
        <input
          type="number"
          name="tip"
          id="tip"
          onChange={handleInputTip}
          placeholder="Custom"
        />
      </div>
    </section>
  );
};
