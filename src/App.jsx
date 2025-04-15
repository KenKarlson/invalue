import React from 'react';
import "./App.css";

/* ===== КОНСТАНТЫ И НАСТРОЙКИ ===== */
// Минимальная длина валидного значения
const MIN_LENGTH = 3;
// Пустое значение для сброса полей ввода
const EMPTY_VALUE = "";

// Начальное состояние компонента
const INITIAL_STATE = {
  currentValue: EMPTY_VALUE, // Текущее отображаемое значение
  list: [],                 // Список добавленных элементов
  inputValue: EMPTY_VALUE   // Значение в поле ввода
};

/* ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===== */
/**
 * Проверяет валидность значения (не менее MIN_LENGTH символов без учета пробелов)
 * @param {string} value - Проверяемое значение
 * @returns {boolean} - true если значение валидно
 */
const isValueValid = (value) => value.trim().length >= MIN_LENGTH;

/* ===== КОМПОНЕНТЫ ИНТЕРФЕЙСА ===== */
/**
 * Заголовок страницы
 */
const Heading = ({ children }) => React.createElement("h1", { className: "page-heading" }, children);

/**
 * Поле ввода текста
 */
const InputField = ({ value, onChange, placeholder }) => React.createElement("input", {
  type: "text",
  value,
  onChange,
  placeholder: "insert value",
  className: "input-field"
});

/**
 * Блок отображения текущего значения
 */
const CurrentValueDisplay = ({ value }) => React.createElement("p", { className: "no-margin-text" },
  "Текущее значение ",
  React.createElement("code", null, ": "),
  React.createElement("span", { className: "current-value" }, value || "*") // '*' если значение пустое
);

/**
 * Сообщение об ошибке валидации
 */
const ErrorMessage = () => React.createElement("div", { className: "error" }, //Не сработает так как кнопка дисабле
  `Введенное значение должно содержать минимум ${MIN_LENGTH} символа`
);

/**
 * Кнопка с обработчиком и состоянием disabled
 */
const Button = ({ onClick, disabled, children }) => React.createElement("button", {
  className: "button",
  onClick,
  disabled
}, children);

/**
 * Компонент списка с условием отображения при пустом списке
 */
const List = ({ items }) => items.length === 0
  ? React.createElement("p", { className: "no-margin-text" }, "Нет добавленных элементов")
  : React.createElement("ul", { className: "list" },
      items.map((item, index) =>
        React.createElement("li", { key: index, className: "list-item" }, item)
      )
    );

/* ===== ОСНОВНОЙ КОМПОНЕНТ ===== */
function App() {
  /* === СОСТОЯНИЕ === */
  const [currentValue, setCurrentValue] = React.useState(INITIAL_STATE.currentValue);
  const [list, setList] = React.useState(INITIAL_STATE.list);
  const [inputValue, setInputValue] = React.useState(INITIAL_STATE.inputValue);

  /* === ОБРАБОТЧИКИ СОБЫТИЙ === */
  /**
   * Обрабатывает изменение значения в поле ввода
   * Обновляет inputValue и currentValue (если значение валидно)
   */
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (isValueValid(newValue)) {
      setCurrentValue(newValue);
    }
  };

  /**
   * Устанавливает новое текущее значение из поля ввода
   * Сбрасывает поле ввода после установки
   */
  const handleSubmitNewValue = () => {
    if (isValueValid(inputValue)) {
      setCurrentValue(inputValue);
      setInputValue(EMPTY_VALUE);
    }
  };

  /**
   * Добавляет текущее значение в список
   * Сбрасывает currentValue после добавления
   */
  const handleAddToList = () => {
    if (isValueValid(currentValue)) {
      setList([...list, currentValue]);
      setCurrentValue(EMPTY_VALUE);
    }
  };

  /* === ПРОИЗВОДНЫЕ ЗНАЧЕНИЯ === */
  // Флаг показа сообщения об ошибке
  const showError = !isValueValid(currentValue) && currentValue !== EMPTY_VALUE;
  // Состояние disabled для кнопки "Ввести новое"
  const submitDisabled = !isValueValid(inputValue);
  // Состояние disabled для кнопки "Добавить в список"
  const addDisabled = !isValueValid(currentValue) || !currentValue;

  /* === РЕНДЕРИНГ ИНТЕРФЕЙСА === */
  return React.createElement(
    "div",
    { className: "app" },
    [
      React.createElement(Heading, { key: "heading" }, "Ввод значения"),
      React.createElement(InputField, {
        key: "input",
        value: inputValue,
        onChange: handleInputChange,
        placeholder: "Введите новое значение"
      }),
      React.createElement(CurrentValueDisplay, { key: "current", value: currentValue }),
      showError && React.createElement(ErrorMessage, { key: "error" }),
      React.createElement("div", { key: "buttons", className: "buttons-container" }, [
        React.createElement(Button, {
          key: "submit",
          onClick: handleSubmitNewValue,
          disabled: submitDisabled
        }, "Ввести новое"),
        React.createElement(Button, {
          key: "add",
          onClick: handleAddToList,
          disabled: addDisabled
        }, "Добавить в список")
      ]),
      React.createElement("div", { key: "list-container", className: "list-container" }, [
        React.createElement("h2", { key: "list-heading", className: "list-heading" }, "Список:"),
        React.createElement(List, { key: "list", items: list })
      ])
    ].filter(Boolean) // Фильтр удаляет false/undefined элементы (например, когда showError = false)
  );
}

export default App;