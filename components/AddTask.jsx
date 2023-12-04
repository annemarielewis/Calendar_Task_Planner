import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { setHours, setMinutes } from "date-fns";
// import Time from "./Time"

export default function AddTask(props) {
  const { addEvent, setAddEvent, handleAddEvent } = props;
  // const Time = ({ date, value, onChange })
  console.log(addEvent);

  return (
    <>
      {/* title input */}
      <form onSubmit={handleAddEvent}>
        <div className="AIF-container">
          <div className="task">
            <input
              className="task"
              type="text"
              placeholder="Task"
              style={{ width: "20%, marginRight: 10px" }}
              value={addEvent.title}
              onChange={(e) =>
                setAddEvent({ ...addEvent, title: e.target.value })
              }
            />
          </div>
          {/* date inputs */}
          <div className="startdate">
            <DatePicker
              className="startdate"
              placeholderText="Start Date"
              style={{ marginRight: "5rem" }}
              selected={addEvent.start}
              onChange={(start) => setAddEvent({ ...addEvent, start: start })}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>

          <div className="enddate">
            <DatePicker
              className="enddate"
              placeholderText="End Date"
              selected={addEvent.end}
              onChange={(end) => setAddEvent({ ...addEvent, end: end })}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>

          <div className="btn">
            <button type="submit" className="rbc-btn-group">
              Submit
            </button>
          </div>
          <Link to="/">
            <button className="rbc-btn-group">x</button>
          </Link>
        </div>
      </form>
    </>
  );
}
