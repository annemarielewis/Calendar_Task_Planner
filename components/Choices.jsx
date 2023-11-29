import {Link} from "react-router-dom"
import AddTask from "./AddTask";

export default function Choices() {

return (
<div className="choices">
          <Link to="/quotegenerator">
            <button className="getquote">Inspirational Quote</button>
          </Link>
          <Link to="/addtask">
            <button className="addtask">Add Task</button>
          </Link>
          <Link to="/addpartner">
            <button className="addpartner">Find Task Partner</button>
          </Link>
        </div>
)
}