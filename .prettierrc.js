// Конфиг Prettier для React-проекта
// Документация: https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 80,    // Макс. длина строки
  tabWidth: 2,       // Отступ в пробелах
  useTabs: false,    // Не использовать табы
  semi: true,        // Точки с запятой
  singleQuote: true, // Одинарные кавычки
  trailingComma: 'all',     // Запятые в конце объектов/массивов
  bracketSpacing: true,     // Пробелы в { foo: bar }
  arrowParens: 'always',    // Скобки у стрелочных функций: (x) => x
  endOfLine: 'lf',          // Перенос строк в стиле Unix
  jsxSingleQuote: true,     // Одинарные кавычки в JSX
  bracketSameLine: false,   // Тег ">" в JSX на новой строке
};