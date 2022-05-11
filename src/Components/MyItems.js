import { Items } from "@azure/cosmos";
import React, { useEffect, useState } from "react";

const MyItems = ({ items, setItems }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    const response = await fetch("/api/items");
    const items = await response.json();
    setItems(items);
  }

  async function updateItem(e, index) {
    let itemToUpdate = items[index];
    itemToUpdate.isComplete = e.target.checked;

    await fetch(`api/item/${itemToUpdate.id}`, {
      method: "post",
      body: JSON.stringify(itemToUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let arr = [...items];
    arr[index] = itemToUpdate;

    setItems(arr);
  }

  async function deleteItem(id, category, index) {
    await fetch(`/api/item/${id}?category=${category}`, {
      method: "DELETE",
    });

    let arr = [...items];
    arr.splice(index, 1);

    setItems(arr);
  }

  return (
    <div>
      {items.length > 0 ? (
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th className="has-text-centered">Complete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td className="has-text-centered">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={item.isComplete}
                    onChange={(e) => updateItem(e, index)}
                  />
                </td>
                <td>
                  <button
                    className="button is-danger"
                    onClick={() => deleteItem(item.id, item.category, index)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="container has-text-centered">
          <h2 className="is-size-4">You don't have any tasks yet</h2>
          <p>You should create some</p>
        </div>
      )}
    </div>
  );
};

export default MyItems;
