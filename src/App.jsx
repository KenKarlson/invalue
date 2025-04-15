import React from 'react';
import "./App.css";

function App() {
  const value = "Test";
  
  return React.createElement(
    "div", 
    {className: "app"}, 
    [
      React.createElement("h1", {className: "page-heading"}, "Ввод значения"),
      React.createElement("p", {className: "no-margin-text"}, "Текущее значение ",
        React.createElement("code", null, ": "),
        React.createElement("span", {className: "current-value"}, value)
      ),
      React.createElement("div", {className: "error"}, "Введенное значение должно содержать минимум 3 символа"),
      React.createElement("div", {className: "buttons-container"}, [
        React.createElement("button", {className: "button"}, "Ввести новое"),
        React.createElement("button", {className: "button", disabled: true}, "Добавить в список")
      ]),
      React.createElement("div", {className: "list-container"}, [
        React.createElement("h2", {className: "list-heading"}, "Список:"),
        React.createElement("p", {className: "no-margin-text"}, "Нет добавленных элементов"),
        React.createElement("ul", {className: "list"}, 
        React.createElement("li", {className: "list-item"}, "Первый элемент")
        )
      ])
    ]
  );
}

export default App;
