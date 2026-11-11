# Сайт Триеры — пробная версия

Главная страница и страницы моделей. Сделано на [Astro](https://astro.build).

## Где что лежит

- `src/data/models.js` — модели: цены, ТТХ, описания, комплектация
- `src/data/series.js` — серии (Фиш, Боурайдер, Магнум Спорт, Север)
- `public/images/` — логотип и фото моделей
- `src/pages/index.astro` — главная
- `src/pages/models/[slug].astro` — шаблон страницы модели

## Запуск на компьютере

```
npm install
npm run dev
```

Сайт откроется на http://localhost:4321

## Публикация

При каждом изменении в ветке `main` сайт сам публикуется на GitHub Pages (см. `.github/workflows/deploy.yml`).
Один раз нужно включить: Settings → Pages → Source: **GitHub Actions**.
