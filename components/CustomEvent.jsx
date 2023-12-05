import axios from 'axios';

export default function CustomEvent({ event }) {
  console.log(event.title)
  const handleDelete = async () => {
    try {
      console.log("click")
      // const response = await axios.delete(`http://localhost:3001/deletetask/${eventid}`);
      // Handle any further actions after successful deletion
    } catch (error) {
      console.error("Error:", error);
    }}

  return (
    <div>
      <span>{event.title}</span>
      <button id="delete-task" onClick={handleDelete} style={{ marginLeft: "5px", color: "black"}}>
      ✓
      </button>
    </div>
  );
}