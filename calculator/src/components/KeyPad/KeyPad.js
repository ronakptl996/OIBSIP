import React from "react";
import "./KeyPad.css";

const KeyPad = (props) => {
  const keys = [
    {
      keycode: 55,
      label: "7",
    },
    {
      keycode: 56,
      label: "8",
    },
    {
      keycode: 57,
      label: "9",
    },
    {
      keycode: 52,
      label: "4",
    },
    {
      keycode: 53,
      label: "5",
    },
    {
      keycode: 54,
      label: "6",
    },
    {
      keycode: 49,
      label: "1",
    },
    {
      keycode: 50,
      label: "2",
    },
    {
      keycode: 51,
      label: "3",
    },
    {
      keycode: 48,
      label: "0",
    },
    {
      keycode: 190,
      label: ".",
    },
    {
      keycode: 13,
      label: "=",
    },
  ];

  const symbols = [
    {
      label: "⌫",
      keyCode: 8,
      value: "backspace",
    },
    {
      label: "÷",
      keyCode: 111,
      value: "/",
    },
    {
      label: "×",
      keyCode: 56,
      value: "*",
    },
    {
      label: "﹣",
      keyCode: 109,
      value: "-",
    },
    {
      label: "+",
      keyCode: 107,
      value: "+",
    },
  ];

  return (
    <div className="keypad">
      <div className="keypad_keys">
        {keys.map((item, index) => (
          <p
            onClick={() => props.handleKeyPress(item.keycode, item.label)}
            key={index}
            className="number_keys"
          >
            {item.label}
          </p>
        ))}
      </div>
      <div className="keypad_symbols">
        {symbols.map((item, index) => (
          <p
            onClick={() => props.handleKeyPress(item.keyCode, item.value)}
            key={index}
            className="symbol_keys"
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default KeyPad;
