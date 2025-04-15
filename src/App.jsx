import React from 'react';
import "./App.css";

function App() {
  // Состояния
  const [currentValue, setCurrentValue] = React.useState("Test");
  const [list, setList] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  // Обработчики событий
  const handleAddToList = () => {
    if (currentValue.trim().length >= 3) {
      setList([...list, currentValue]);
      setCurrentValue(""); // Очищаем текущее значение после добавления( не работает . исправить)
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (newValue.trim().length >= 3) {
      setCurrentValue(newValue);
    }
  };

  const handleSubmitNewValue = () => {
    if (inputValue.trim().length >= 3) {
      setCurrentValue(inputValue);
      setInputValue("");
    }
  };

  // Проверка валидности значения (минимум 3 символа) вопрос  и знак
  const isValueValid = currentValue.trim().length >= 3;

  return React.createElement(
    "div",
    { className: "app" },
    [
      React.createElement("h1", { className: "page-heading" }, "Ввод значения"),
      React.createElement("input", {
        type: "text",
        value: inputValue,
        onChange: handleInputChange,
        placeholder: "Введите новое значение",
        className: "input-field"
      }),
      React.createElement("p", { className: "no-margin-text" }, "Текущее значение ",
        React.createElement("code", null, ": "),
        React.createElement("span", { className: "current-value" }, currentValue || "—")
      ),
      // Блок ошибки (показывается только если значение некорректно) Исправить очистить дописать
      !isValueValid && currentValue !== "" && React.createElement(
        "div", 
        { className: "error" }, 
        "Введенное значение должно содержать минимум 3 символа"
      ),
      React.createElement("div", { className: "buttons-container" }, [
        React.createElement("button", {
          className: "button",
          onClick: handleSubmitNewValue,
          disabled: inputValue.trim().length < 3
        }, "Ввести новое"),
        React.createElement("button", {
          className: "button",
          onClick: handleAddToList,
          disabled: !isValueValid || !currentValue
        }, "Добавить в список")
      ]),
      React.createElement("div", { className: "list-container" }, [
        React.createElement("h2", { className: "list-heading" }, "Список:"),
        list.length === 0 
          ? React.createElement("p", { className: "no-margin-text" }, "Нет добавленных элементов")
          : React.createElement("ul", { className: "list" },
              list.map((item, index) => 
                React.createElement("li", { key: index, className: "list-item" }, item)
              )
            )
      ])
    ].filter(Boolean) // Фильтр для удаления null/undefined (если error не отображается)&&&&&&?????
  );
}

export default App;