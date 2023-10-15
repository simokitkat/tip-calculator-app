/* eslint-disable react/prop-types */
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
      />
    </section>
  );
}
