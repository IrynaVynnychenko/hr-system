# 🚀 Швидкий старт для GitHub Pages

## ✅ Що вже налаштовано

1. **GitHub Actions workflow** (`.github/workflows/deploy.yml`)
2. **Скрипти збірки** в `package.json`
3. **Файл `.nojekyll`** для правильної роботи GitHub Pages

## 🎯 Наступні кроки

### 1. Запуште зміни в репозиторій
```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### 2. Налаштуйте GitHub Pages
1. Перейдіть до **Settings** → **Pages**
2. У розділі **Source** виберіть **GitHub Actions**
3. Збережіть налаштування

### 3. Чекайте деплою
- Перейдіть до вкладки **Actions**
- Чекайте завершення workflow (2-3 хвилини)
- Після успішного деплою отримаєте URL сайту

## 🌐 Ваш сайт буде доступний за адресою:
```
https://your-username.github.io/hr-system/
```

## 📱 Основні сторінки для показу Alive:

### 🏠 Головна сторінка
- `https://your-username.github.io/hr-system/` - головна сторінка системи

### 🔐 Аутентифікація
- `https://your-username.github.io/hr-system/login.html` - вхід в систему
- `https://your-username.github.io/hr-system/registration.html` - реєстрація

### 🏢 Управління компаніями
- `https://your-username.github.io/hr-system/companies.html` - список компаній
- `https://your-username.github.io/hr-system/add-company.html` - додати компанію
- `https://your-username.github.io/hr-system/company-item.html` - деталі компанії

### 👥 Вакансії
- `https://your-username.github.io/hr-system/list.html` - список вакансій
- `https://your-username.github.io/hr-system/vacancy-info.html` - деталі вакансії
- `https://your-username.github.io/hr-system/vacancy-actions.html` - дії з вакансією

### 📊 Додаткові сторінки
- `https://your-username.github.io/hr-system/active&archive.html` - активні та архівні
- `https://your-username.github.io/hr-system/all-pages.html` - всі сторінки системи

## 🔄 Автоматичний деплой

Після налаштування кожен `git push` до гілки `main` автоматично:
1. Збирає проект (`npm run build`)
2. Деплоїть на GitHub Pages
3. Оновлює ваш сайт

## ⚡ Локальна розробка

Для локальної розробки:
```bash
npm install
npm start
```

Сайт буде доступний на `http://localhost:3000`
