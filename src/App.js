import { useState } from "react";
import Todo from "./components/Todo.js";
// import Modal from "./components/Modal.js";
// import Backdrop from "./components/Backdrop.js";
function App() {
  const [textList, setTextInput] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setTextInput(event.target.value);
  };
  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, textList];
    });
    setTextInput("");
  };
  const deleteItems = () => {
    console.log("deleted");
    
  };
  return (
    <div>
      <h1>My Todos</h1>
      <input
        type="text"
        placeholder="Add items"
        value={textList}
        onChange={itemEvent}
      />
      <button className="btn" onClick={listOfItem}>
        add
      </button>

      {items.map((val, idx) => {
        return <Todo text={val} num={idx} id={idx} onDel={deleteItems} />;
      })}
      {/* <br></br>
      <Todo text="complete work" task="2" />
      <br></br>
      <Todo text="upload keys" task="3" /> */}
      {/* <Modal />
      <Backdrop /> */}
    </div>
  );
}

export default App;
