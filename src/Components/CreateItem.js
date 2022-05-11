import React, { useState, useEffect } from "react";

const CreateItem = ({ items, setItems }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("home");

  async function handleCreateItem() {
    const result = await fetch("/api/items", {
      method: "put",
      body: JSON.stringify({ name, description, category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let createdItem = await result.json();

    let arr = [...items, createdItem];
    setItems(arr);

    setName("");
    setDescription("");
    setCategory("home");
  }

  return (
    <div>
      <h1 className="is-size-2">New Task</h1>
      <div className="field">
        <label htmlFor="">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="field">
        <label htmlFor="">Description</label>
        <div className="control">
          <textarea
            rows="3"
            className="input"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="field">
        <label htmlFor="">Category</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="fun">Fun</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field has-text-right">
        <div className="control">
          <button className="button is-primary" onClick={handleCreateItem}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
