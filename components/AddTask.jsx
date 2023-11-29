import '../src/App.css'
import DatePicker from "react-datepicker";

export default function AddTask(props) {
  const { addEvent, setAddEvent, handleAddEvent } = props;

  return (
    <>
      {/* title input */}
      <div className="AIF-container" style={{ border: "5rem" }}>
      <input
        type="text"
        placeholder="Task"
        style={{ width: "20%, marginRight: 10px" }}
        value={addEvent.title}
        onChange={(e) => setAddEvent({ ...addEvent, title: e.target.value })}
      />
      {/* date input */}
      <DatePicker
        placeholderText="Start Date"
        style={{ marginRight: "5rem" }}
        selected={addEvent.start}
        onChange={(start) => setAddEvent({ ...addEvent, start: start })}
      />
      <DatePicker
        placeholderText="End Date"
        selected={addEvent.end}
        onChange={(end) => setAddEvent({ ...addEvent, end: end })}
      />
      <button style={{ marginTop: "5rem" }} onClick={handleAddEvent}>
        Submit
      </button>
      </div>
    </>
  );
}
