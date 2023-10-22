/* eslint-disable react/prop-types */
import group from "../assets/images/icon-person.svg";

export default function People({
  peopleCount,
  handlePeopleCountChange,
  errorClass,
}) {
  return (
    <section className="people">
      <div className="headings">
        <h2>Number of People</h2>
        <h2 className={errorClass}>Can’t be zero</h2>
      </div>
      <input
        type="number"
        name="people"
        id="people"
        value={peopleCount}
        onChange={handlePeopleCountChange}
        placeholder="0"
        className={errorClass}
      />
      <img src={group} alt="icon-person" className="group" />
    </section>
  );
}
