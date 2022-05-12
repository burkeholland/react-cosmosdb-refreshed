import React, { useEffect, useState } from "react";
import CreateItem from "./Components/CreateItem";
import MyItems from "./Components/MyItems";

const App = () => {
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <h1 className="is-size-2">New Task</h1>
              <CreateItem setItems={setItems}></CreateItem>
            </div>
            <div className="column">
              <h1 className="is-size-2">My Tasks</h1>
              <MyItems
                items={items}
                setItems={(items) => setItems(items)}
              ></MyItems>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
