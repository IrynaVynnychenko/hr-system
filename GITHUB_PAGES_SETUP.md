# 🚀 Налаштування GitHub Pages для HR System

## 📋 Кроки для активації GitHub Pages

### 1. Увійдіть в GitHub репозиторій
Перейдіть до вашого репозиторію на GitHub: `https://github.com/your-username/hr-system`

### 2. Відкрийте налаштування репозиторію
- Натисніть на вкладку **"Settings"** у верхній частині репозиторію
- Прокрутіть вниз до розділу **"Pages"** в лівому меню

### 3. Налаштуйте GitHub Pages
- У розділі **"Source"** виберіть **"GitHub Actions"**
- Збережіть налаштування

### 4. Перевірте workflow
- Перейдіть до вкладки **"Actions"** у вашому репозиторії
- Після push до гілки `main` автоматично запуститься workflow
- Чекайте завершення деплою (зазвичай 2-3 хвилини)

### 5. Отримайте URL вашого сайту
Після успішного деплою ваш сайт буде доступний за адресою:
```
https://your-username.github.io/hr-system/
```

## 🔧 Що робить workflow

1. **Автоматичний запуск**: При кожному push до гілки `main`
2. **Встановлення Node.js**: Використовує Node.js 18
3. **Встановлення залежностей**: `npm ci`
4. **Збірка проекту**: `npm run build`
5. **Деплой**: Завантажує вміст папки `dist` на GitHub Pages

## 📁 Структура деплою

Ваш сайт буде містити всі файли з папки `dist`:
- `index.html` - головна сторінка
- `login.html` - сторінка входу
- `companies.html` - список компаній
- `css/style.css` - стилі
- `js/main.js` - JavaScript
- `image/` - зображення
- `fonts/` - шрифти

## 🎯 Доступні сторінки

Після деплою ви зможете показати Alive наступні сторінки:

### 🔐 Аутентифікація
- `https://your-username.github.io/hr-system/` - головна сторінка
- `https://your-username.github.io/hr-system/login.html` - вхід
- `https://your-username.github.io/hr-system/registration.html` - реєстрація

### 🏢 Управління компаніями
- `https://your-username.github.io/hr-system/companies.html` - список компаній
- `https://your-username.github.io/hr-system/add-company.html` - додати компанію

### 👥 Вакансії
- `https://your-username.github.io/hr-system/list.html` - список вакансій
- `https://your-username.github.io/hr-system/vacancy-info.html` - деталі вакансії

## ⚠️ Важливо

- Переконайтеся, що у вашому `package.json` є скрипт `build`
- Папка `dist` повинна містити всі необхідні файли
- Після змін у коді зробіть `git push` для автоматичного деплою

## 🐛 Вирішення проблем

### Якщо деплой не працює:
1. Перевірте вкладку "Actions" на помилки
2. Переконайтеся, що папка `dist` існує
3. Перевірте, що `npm run build` працює локально

### Якщо сайт не відображається:
1. Зачекайте 5-10 хвилин після деплою
2. Очистіть кеш браузера
3. Перевірте URL (має закінчуватися на `/hr-system/`)
