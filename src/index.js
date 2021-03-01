import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// let inputValue = undefined;

const App = () => {
  // let items = new Map();
  // let [items, setItem] = useState(new Map());
  // const [checked, setchecked] = useState(false);
  // let [items, setItem] = useState([
  //   ["first element", true],
  //   ["second element", false],
  //   ["third element", false],
  // ]);
  let [items, setItem] = useState([
    { task: "first element", status: true },
    { task: "second element", status: false },
    { task: "third element", status: false },
  ]);
  // console.log(usePrevious(items));
  // console.log(items.includes("first element"));
  // setItem(items.set("first element", true));
  // items
  //   .set("first element", true)
  //   .set("second element", false)
  //   .set("third element", false);
  // console.log(items.get("first element"));
  const inputHandle = (event) => {
    // console.log("----------");
    // console.log(event);
  };

  const addToBotton = (event) => {
    console.log("----------");

    console.log(event.target.parentNode.childNodes[0].value);
    const newTask = {
      task: event.target.parentNode.childNodes[0].value,
      status: false,
    };
    items.push(newTask);
    // items[Task] = false;
    // items = { ...items, Task: false };
    // items.unshift({ [Task]: false });
    // let newItem = { ...pervItem };
    // newItem[Task]
    // setItem([...items, event.target.parentNode.childNodes[0].value]);
    setItem((pervItem) => {
      let newItem = [...pervItem];
      console.log("pervItem = ", pervItem);
      return newItem;
    });
  };

  const addToTop = (event) => {
    console.log("----------");
    // console.log(event.target.parentNode.childNodes[0].value);
    const newTask = {
      task: event.target.parentNode.childNodes[0].value,
      status: false,
    };
    items.unshift(newTask);
    // setItem([event.target.parentNode.childNodes[0].value, ...items]);
    setItem((pervItem) => {
      let newItem = [...pervItem];

      // console.log(pervItem);
      return newItem;
    });
  };

  const checkBoxClicked = (e) => {
    console.log("==========");
    // console.log(e);
    // console.log(e.target.checked);
    // e.target.checked = !e.target.checked;
    // console.log(e.target.checked);
    console.log(e.target.id);

    // console.log("items[e.target.id] = ", items[e.target.id]);
    // const checked = items[e.target.id];

    items[e.target.id].status = e.target.checked;
    if (e.target.checked) {
      const checked = items.splice(e.target.id, 1);
      // delete items[e.target.id];
      console.log(items[e.target.id]);
      console.log("checked", checked);
      // items[checked] = true;
      // Object.assign(items, checked);
      // items = { ...items, checked };
      console.log("befor push items = ", items);
      items.push(checked[0]);
      console.log("after push items = ", items);
    }

    setItem((pervItem) => {
      let newItem = [...pervItem];
      // console.log(pervItem);
      return newItem;
    });

    if (e.target.checked) {
      // let checkedItem = items.splice(items.indexOf(e.target.id), 1);
      // setItem([...items, checkedItem]);
    }
    // console.log(checkedItem);
  };

  const onChange = (e) => {
    console.log("onchange");
    // return !e.target.checked;
  };

  const CreatList = () => {
    console.log("creatlist");
    console.log(items);
    const result = Object.entries(items).map(List);

    // console.log(Object.entries(items).forEach((item) => List(item)));
    console.log("Creat List result = ", result);
    return result;
  };
  const List = (item) => {
    // for (const [key, value] of Object.entries(items)) {
    //   console.log(`${key}: ${value}`);
    // }
    // console.log("List fuction = ", item);
    // console.log(item[1].task);

    return (
      <li key={item[0]}>
        <input
          id={item[0]}
          type="checkbox"
          onClick={checkBoxClicked}
          onChange={onChange}
          checked={item[1].status}
        />
        <span>{item[1].task}</span>
      </li>
      // </ul>
    );
  };

  return (
    <div>
      <input className="input" type="text" onChange={inputHandle} />
      <button onClick={addToBotton}> add to bottom</button>
      <button onClick={addToTop}> add to top</button>
      <ul>{CreatList()} </ul>

      {/* <List /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
