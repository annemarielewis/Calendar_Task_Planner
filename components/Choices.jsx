import {Link} from "react-router-dom"
import AddTask from "./AddTask";

export default function Choices() {

return (
<div className="choices">
          <Link to="/addtask">
            <button>Add Task</button>
          </Link>
          <Link to="/quotegenerator">
            <button>Inspirational Quote</button>
          </Link>
          <Link to="/addpartner">
            <button>Find Task Partner</button>
          </Link>
        </div>
)
}