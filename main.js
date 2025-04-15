//Для VUE
//const fs = require('fs');
//const path = require('path');

//Для REACT
import fs from 'fs';
import path from 'path';

// Содержимое для .editorconfig
const editorConfigContent = `
# EditorConfig помогает разработчикам поддерживать единый стиль кода
# между разными редакторами и IDE. Документация: https://editorconfig.org

root = true # Применять настройки ко всем файлам в проекте и его поддиректориях

[*] # Настройки для всех файлов
indent_style = space # Использовать пробелы вместо табов
indent_size = 2 # Размер отступа - 2 пробела
end_of_line = lf # Линукс-стиль переноса строк (LF)
charset = utf-8 # Кодировка файлов
trim_trailing_whitespace = true # Удалять пробелы в конце строк
insert_final_newline = true # Добавлять пустую строку в конце файла

[*.md] # Особые настройки для Markdown-файлов
trim_trailing_whitespace = false # Не удалять пробелы в конце строк (важно для Markdown)
`;

// Содержимое для .prettierrc.js (CommonJS, совместимый с CRA)
const prettierConfigContent = `// Конфиг Prettier для React-проекта
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
`;

// Функция для создания файла
function createConfigFile(filename, content) {
  const filePath = path.join(process.cwd(), filename);
  fs.writeFile(filePath, content.trim(), (err) => {
    if (err) {
      console.error(`Ошибка при создании ${filename}:`, err);
    } else {
      console.log(`✓ ${filename} успешно создан`);
    }
  });
}

// Создаем файлы :)
createConfigFile('.editorconfig', editorConfigContent);
createConfigFile('.prettierrc.js', prettierConfigContent);
