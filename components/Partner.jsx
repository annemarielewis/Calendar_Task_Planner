import { Link } from "react-router-dom";
export default function Partner() {
  function findPartner(event) {
    event.preventDefault();
    // Perform your partner search logic here
    if (2 === 5) {
      alert("Partner found!");
    } else {
      alert("Username not found");
    }
  }
  return (
    <>
      <form autoComplete="off" onSubmit={findPartner}>
        <div className="AIF-container">
          {/* Task input */}
          <div className="title">
            <input
              className="title"
              type="text"
              placeholder="Partner's Username"
              style={{ width: "92%", height: "1.2rem", marginRight: "10px" }}
            />
          </div>
          {/* Submit button */}
          <div className="btn">
            <button type="submit" className="submit-event">
              Search
            </button>
          </div>
          {/* Display search result */}
          <div></div>
          {/* Cancel link */}
          <Link to="/">
            <button className="exit-btn">X</button>
          </Link>
        </div>
      </form>
    </>
  );
}

// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Partner() {
//   const [username, setUsername] = useState("");
//   const [searchResult, setSearchResult] = useState("");

//   function findPartner(event) {
//     event.preventDefault();

//     // Perform your partner search logic here
//     if (username === "exampleUsername") {
//       setSearchResult("Partner found!");
//     } else {
//       setSearchResult("Username not found");
//     }
//   }

//   return (
//     <>
//       <form autoComplete="off" onSubmit={findPartner}>
//         <div className="AIF-container">
//           {/* Task input */}
//           <div className="title">
//             <input
//               className="title"
//               type="text"
//               placeholder="Partner's Username"
//               style={{ width: "92%", height: "1.2rem", marginRight: "10px" }}
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           {/* Submit button */}
//           <div className="btn">
//             <button type="submit" className="submit-event">
//               Search
//             </button>
//           </div>
//           {/* Display search result */}
//           <div>{searchResult}</div>
//           {/* Cancel link */}
//           <Link to="/">
//             <button className="exit-btn">X</button>
//           </Link>
//         </div>
//       </form>
//     </>
//   );
// }
