import axios from "axios";

export default function UpdateEvent({ event, handleUpdate }) {
  const [formData, setFormData] = useState({
    title: "",
    start: "",
    end: "",
  });

  // Function to handle start date change
  const handleStartDateChange = (date) => {
    // console.log(date);
    setAddEvent({ ...addEvent, start: date });
    setFormData({ ...formData, start: date });
  };

  // Function to handle end date change
  const handleEndDateChange = (date) => {
    setAddEvent({ ...addEvent, end: date });
    setFormData({ ...formData, end: date });
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleUpdate}>
        <div className="AIF-container">
          {/* Task input */}
          <div className="title">
            <input
              className="title"
              id="title"
              type="text"
              placeholder={event.title}
              style={{ width: "92%", height: "1.2rem", marginRight: "10px" }}
              value={addEvent.title}
              onChange={(e) => {
                setAddEvent({ ...addEvent, title: e.target.value });
                setFormData({ ...formData, title: e.target.value });
              }}
            />
          </div>
          {/* Start date input */}
          <div className="startdate">
            <DatePicker
              className="startdate"
              id="start"
              placeholderText={event.start}
              style={{ marginRight: "5rem" }}
              selected={addEvent.start}
              onChange={handleStartDateChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          {/* End date input */}
          <div className="enddate">
            <DatePicker
              className="enddate"
              placeholderText={event.end}
              id="end"
              selected={addEvent.end}
              onChange={handleEndDateChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          {/* Submit button */}
          <div className="btn">
            <button type="submit" className="submit-event">
              Submit
            </button>
          </div>
          {/* Cancel link */}
          <Link to="/">
            <button className="exit-btn">X</button>
          </Link>
        </div>
      </form>
    </>
  );
}
