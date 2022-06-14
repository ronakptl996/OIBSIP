import React, { useState, useEffect } from "react";
import img from "../img/19830.png";
import "../App.css";

const getLocalData = () => {
  const lists = localStorage.getItem("list");
  // console.log(lists);

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("Please Enter Your Data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );

      setToggleSubmit(true);

      setInputData("");

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
        date: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    // console.log(id);
    const updatedItems = items.filter((elem) => {
      return elem.id !== id;
    });

    setItems(updatedItems);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);

    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setIsEditItem(id);
  };

  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main_div">
        <div className="child_div">
          <figure>
            <img src={img} alt="todo logo" />
            <figcaption>Add Your List Item</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />

            {toggleSubmit ? (
              <i
                className="fas fa-plus add_btn"
                title="Add Item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="fas fa-edit add_btn"
                title="Update Item"
                onClick={addItem}
              ></i>
            )}
          </div>

          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="showDate">
                    <p>
                      Created At :{" "}
                      {`${curElem.date}/${curElem.month}/${curElem.year}`}
                    </p>
                    <p>Time : {curElem.time}</p>
                  </div>
                  <i
                    className="fa fa-edit edit_btn"
                    title="Edit Item"
                    onClick={() => editItem(curElem.id)}
                  ></i>
                  <i
                    className="fa fa-trash-alt add_btn"
                    title="Delete Item"
                    onClick={() => deleteItem(curElem.id)}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" onClick={removeAll}>
              {" "}
              <span>Remove All</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
