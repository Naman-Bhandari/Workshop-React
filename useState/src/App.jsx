import './App.css'
import React, { useState } from "react";


// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="App">
//       <div>Button Clicked - {count} times</div>
//       <button onClick={() => {setCount((prev)=>prev + 1 ); setCount((prev) => prev + 1)}}
//       >Click</button>
//     </div>
//   );
// }

// function App() {
//   const [state, setState] = useState({count:0, clicks:0});
//   return (
//     <div className="App">
//       <div>Button Clicked - {state.count} times</div>
//       <div>clicks - {state.clicks}</div>
//       <button onClick={() => {setState({...state,count:state.count + 1, clicks:state.clicks + 2})}}>Click</button>
//     </div>
//   );
// }
export default App;
function App() {
  const [items, setItem] = useState([]);
  return (
    <div className="App">
      <div>{items}</div>
      <button onClick={() =>{setItem([...items,`${items.length + 1} `])}}
      >Add Items</button>
    </div>
  );
}