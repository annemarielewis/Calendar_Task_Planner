export default function CustomEvent({ event }) {
  const handleDelete = () => {
    // delete logic/database right here
    console.log("Delete Event:", event);
  };

  return (
    <div>
      <span>{event.title}</span>
      <button onClick={handleDelete} style={{ marginLeft: "5px", color: "black"}}>
        X
      </button>
    </div>
  );
}
