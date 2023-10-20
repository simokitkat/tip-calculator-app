/* eslint-disable react/prop-types */
import group from "../assets/images/icon-person.svg";

export default function People({ peopleCount, handlePeopleCountChange }) {
  return (
    <section className="people">
      <h2>Number of People</h2>
      <input
        type="number"
        name="people"
        id="people"
        value={peopleCount}
        onChange={handlePeopleCountChange}
        placeholder="0"
      />
      <img src={group} alt="icon-person" className="group" />
    </section>
  );
}
