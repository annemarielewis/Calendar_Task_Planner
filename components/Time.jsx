// import {useState} from "react"
// import DatePicker from "react-datepicker";

// export default function Time() {
//     const [startDate, setStartDate] = useState(new Date());
//     const ExampleCustomTimeInput = ({ date, value, onChange }) => (
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         style={{ border: "solid 1px pink" }}
//       />
//     );
//     return (
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         showTimeInput
//         customTimeInput={<ExampleCustomTimeInput />}
//       />
//     );
//     }