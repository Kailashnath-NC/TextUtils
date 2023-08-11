// WITH ROUTING

// import "./App.css";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import About from "./components/About";
// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   const [mode, setmode] = useState("light");

//   const toggleMode = () => {
//     if (mode === "light") {
//       setmode("dark");
//       document.body.style.color = "white";
//       document.body.style.background = "grey";
//     } else {
//       setmode("light");
//       document.body.style.color = "black";
//       document.body.style.background = "white";
//     }
//   };
//   return (
//     <>
//       <Router>
//         <Navbar
//           title="TextUtils"
//           aboutText="About"
//           mode={mode}
//           toggleMode={toggleMode}
//         />
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="/" element={<TextForm heading="Enter text" />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

// Without ROUTING
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.color = "white";
      document.body.style.background = "grey";
    } else {
      setmode("light");
      document.body.style.color = "black";
      document.body.style.background = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <TextForm heading="Enter text" />
    </>
  );
}

export default App;
