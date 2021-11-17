// import React from "react";

// const App = () => {
//   return(
//      <> 
//      <MyName />                                   *****  NESTED COMPONENTS   *****
//      <Gallery />
//      <h1 className = "myclassname">Hello World! </h1>
//      <p>Awesome </p>
//      <MyName />
//      <Gallery />   
//       </>
//   );
// };

// const MyName = () => {
//   return <h1> Rahul Chaudhary </h1>
// }
// const Gallery = () => {
//   return <h1> This is a visual studio code </h1>
// }

// export default App;


import React from "react";
// import Resturant from "./component/Basics/Resturant";
// import UseState from "./component/Hooks/useState";
// import UseEffect from "./component/Hooks/useEffect";
// import UseReducer from "./component/Hooks/useReducer";
// import Todo from "./component/TodoReact/todo";
import Temp from "./component/weather/temp";

const App = () => {
  return (
    <>
      <Temp />
    </>
  );
};

export default App;
