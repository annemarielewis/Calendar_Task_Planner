import axios from "axios";
import { Link } from "react-router-dom";

export default function CustomEvent({ event, setAllEvents }) {
  // console.log("event", event);
  // console.log(event._id);
  // console.log("setallevents:", setAllEvents);

  let id = event._id;

  const handleDelete = async () => {
    // console.log("id", id);
    try {
      const response = await axios.delete(
        `http://localhost:3001/deletetask/${id}`
      );

      // console.log("response", response);
      setAllEvents((currentEvents) =>
        currentEvents.filter((event) => event._id !== id)
      );
      // Handle any further actions after successful deletion
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <span>{event.title}</span>
      <Link to={`/updatetask/${event._id}`}>
      <button id="update-task" style={{ marginLeft: "0px" }}>
        change
      </button>
      </Link>
      <button
        id="delete-task"
        onClick={handleDelete}
        style={{ marginLeft: "0px" }}
      >
        ✓
      </button>
    </div>
  );
}
