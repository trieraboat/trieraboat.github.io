// Модельный ряд Триеры. Источник ТТХ и цен: каталог дилера New Star Marine (ноябрь 2026).
// Позже эти данные будут редактироваться в админке (Directus).
// photo: null — фото пока нет, сайт покажет фирменную заглушку.

const s = (o) => ({
  // общие для всех моделей значения
  material: 'Алюминий',
  motorType: 'Подвесной',
  ...o,
});

export const models = [
  s({ slug: '420-fish', name: '420 Фиш', series: 'fish', price: 590000, length: 4.28, lengthOverall: 4.65, beam: 1.75, payload: 390, hp: 40, people: 4, deadrise: 11, side: 2, bottom: 3, transom: '380/400/508', height: 0.75, weight: 300, fuel: 50,
    short: 'Самый компактный «Фиш»: лёгкий, недорогой, легко возить на прицепе и спускать в одиночку.' }),
  s({ slug: '420-bowrider', name: '420 Боурайдер', series: 'bowrider', price: 590000, length: 4.20, beam: 1.75, payload: 390, hp: 40, people: 4, deadrise: 11, side: 2, bottom: 3, transom: '380/400/508', height: 0.75, weight: 300, fuel: 50, photo: null,
    short: 'Первый катер для семьи: открытый нос, места для четверых и мотор до 40 л.с.' }),
  s({ slug: '430-sever', name: '430 Север', series: 'sever', price: 599000, length: 4.65, hullLength: 4.33, beam: 1.83, payload: 450, hp: 60, people: 4, deadrise: 12, side: 2, bottom: 3, transom: '400/508', height: 0.80, weight: 350, fuel: 85, isNew: true,
    short: 'Новинка серии «Север»: универсальный катер и для рыбалки, и для отдыха. Бак 85 л.' }),
  s({ slug: '460-fish', name: '460 Фиш', series: 'fish', price: 819000, length: 4.60, beam: 1.86, payload: 480, hp: 70, people: 5, deadrise: 13, side: 2.5, bottom: 3, transom: '508', height: 0.85, weight: 360, fuel: 80,
    short: 'Золотая середина для рыбака: пятеро на борту, просторная фиш-палуба, мотор до 70 л.с.' }),
  s({ slug: '460-bowrider', name: '460 Боурайдер', series: 'bowrider', price: 819000, length: 4.60, beam: 1.86, payload: 480, hp: 70, people: 5, deadrise: 13, side: 2.5, bottom: 3, transom: '400/508', height: 0.85, weight: 360, fuel: 80, isNew: true,
    short: 'Семейный боурайдер на пятерых: прогулки, купание и рыбалка в одном катере.' }),
  s({ slug: '470-fish', name: '470 Фиш', series: 'fish', price: 950000, length: 4.70, beam: 1.90, payload: 655, hp: 80, people: 5, deadrise: 13, side: 2.5, bottom: 3, transom: '400/508', height: 0.90, weight: 430, fuel: 80, photo: null,
    short: 'Рыболовный катер с самой большой грузоподъёмностью в своём размере — 655 кг.' }),
  s({ slug: '470-bowrider', name: '470 Боурайдер', series: 'bowrider', price: 950000, length: 4.70, lengthOverall: 5.20, beam: 1.90, payload: 565, hp: 80, people: 5, deadrise: 13, side: 2.5, bottom: 3, transom: '508/635', height: 0.90, weight: 430, fuel: 80, isNew: true,
    short: 'Боурайдер с высоким бортом 0,9 м и мотором до 80 л.с. для уверенного хода по волне.' }),
  s({ slug: '470-magnum-sport', name: '470 Магнум Спорт', series: 'magnum-sport', price: 1300000, length: 4.80, beam: 1.90, payload: 490, hp: 80, people: 4, deadrise: 13, side: 2.5, bottom: 3, transom: '508/635', height: 0.90, weight: 450, fuel: 80, isNew: true,
    short: 'Компактный «Магнум»: полное рыболовное оснащение в корпусе 4,8 м.' }),
  s({ slug: '490-sever', name: '490 Север', series: 'sever', price: 749000, length: 5.25, hullLength: 4.90, beam: 2.00, payload: 570, hp: 90, people: 5, deadrise: 14, side: 3, bottom: 4, transom: '508/635', height: 0.90, weight: 460, fuel: 110, isNew: true,
    short: 'Больше пяти метров по цене четырёхметрового: борт 3 мм, днище 4 мм, бак 110 л.' }),
  s({ slug: '500-fish', name: '500 Фиш', series: 'fish', price: 1090000, length: 5.00, beam: 2.06, payload: 570, hp: 100, people: 5, deadrise: 14, side: 3, bottom: 4, transom: '635', height: 0.90, weight: 450, fuel: 90, isNew: true, full: true,
    short: 'Пятиметровый рыболовный катер: фиш-палуба во весь нос, корпус 3/4 мм, мотор до 100 л.с.' }),
  s({ slug: '500-bowrider', name: '500 Боурайдер', series: 'bowrider', price: 1090000, length: 5.00, beam: 2.06, payload: 570, hp: 100, people: 5, deadrise: 14, side: 3, bottom: 4, transom: '635', height: 0.90, weight: 450, fuel: 90, photo: null,
    short: 'Большой боурайдер для компании: широкий корпус 2,06 м и мотор до 100 л.с.' }),
  s({ slug: '500-magnum-sport', name: '500 Магнум Спорт', series: 'magnum-sport', price: 1400000, length: 5.00, beam: 2.06, payload: 530, hp: 100, people: 4, deadrise: 14, side: 3, bottom: 4, transom: '635', height: 0.90, weight: 490, fuel: 90, isNew: true,
    short: 'Турнирный характер: всё для долгой рыбалки и мотор до 100 л.с.' }),
  s({ slug: '540-fish', name: '540 Фиш', series: 'fish', price: 1290000, length: 5.40, beam: 2.09, payload: 740, hp: 150, people: 5, deadrise: 15, side: 3, bottom: 4, transom: '635', height: 0.95, weight: 550, fuel: 130,
    short: 'Для больших водоёмов и дальних выходов: 740 кг груза, бак 130 л, до 150 л.с.' }),
  s({ slug: '540-bowrider', name: '540 Боурайдер', series: 'bowrider', price: 1290000, length: 5.40, beam: 2.09, payload: 740, hp: 150, people: 5, deadrise: 15, side: 3, bottom: 4, transom: '635', height: 0.95, weight: 550, fuel: 130,
    short: 'Флагманский боурайдер: мощный, просторный и устойчивый на волне.' }),
  s({ slug: '540-magnum-sport', name: '540 Магнум Спорт', series: 'magnum-sport', price: 1650000, length: 5.40, beam: 2.09, payload: 740, hp: 150, people: 4, deadrise: 15, side: 3, bottom: 4, transom: '635', height: 0.95, weight: 600, fuel: 130,
    short: 'Экспедиционный рыболовный катер: максимум оснащения и запас хода.' }),
  s({ slug: '600-magnum-sport', name: '600 Магнум Спорт', series: 'magnum-sport', price: 2690000, length: 6.00, beam: 2.40, payload: 840, hp: 225, people: 5, deadrise: 17, side: 3, bottom: 4, transom: '635', height: 1.10, weight: 790, fuel: 230, isNew: true,
    short: 'Флагман Триеры: 6 метров, борт 1,1 м, мотор до 225 л.с. и бак 230 л.' }),
  s({ slug: '460-fish-2027', name: '460 Фиш 2027', series: 'fish', price: 890000, length: 4.95, hullLength: 4.60, beam: 2.00, payload: 480, hp: 70, people: 5, deadrise: 13, side: 2.5, bottom: 3, transom: '508', height: 0.85, weight: 420, fuel: 80, prototype: true,
    short: 'Прототип следующего поколения. Показываем заранее, чтобы собрать ваши отзывы до запуска в серию.' }),
];

// Подробный контент — пока только для 500 Фиш
export const details = {
  '500-fish': {
    title: 'Триера 500 Фиш',
    lead: 'Катер для тех, кто выходит на воду ради рыбы. Пять метров, широкий корпус и вся носовая часть под рыбалку.',
    description: [
      'Корпус из алюминиево-магниевого сплава: борт 3 мм, днище 4 мм. Он лёгкий, но крепкий и не боится коррозии, поэтому катер спокойно переносит мели, причалы и годы эксплуатации.',
      'Нос целиком занимает фиш-палуба с рундуками. Встал, забросил, вытащил — ничего не мешает. Пройти на неё можно через проход между консолями, снасти держатся на полках по бортам.',
      'В кокпите два кресла «Комфорт» на амортизационных стойках и съёмный диван-рундук на корме. На борт можно взять до пяти человек.',
      'Под транцем помещается мотор до 100 л.с., а стационарный бак на 90 литров даёт запас хода на целый день. Длинные кринолины удобны и для рыбалки с кормы, и чтобы забраться обратно после купания.',
    ],
    highlights: [
      { value: '5,00 м', label: 'длина' },
      { value: '2,06 м', label: 'ширина' },
      { value: '100 л.с.', label: 'макс. мотор' },
      { value: '5 чел.', label: 'на борту' },
    ],
    gallery: Array.from({ length: 18 }, (_, i) => `${String(i + 1).padStart(2, '0')}.webp`),
    videos: ['https://rutube.ru/play/embed/732b970d5d1ab724946f67b830056256'],
    colors: [
      { name: 'Тёмно-серый', hex: '#5b5f63' },
      { name: 'Бирюзовый', hex: '#1f8a99' },
      { name: 'Океанская синь', hex: '#1d3f66' },
      { name: 'Красный', hex: '#a3121b' },
    ],
    equipment: [
      { group: 'Корпус и палуба', items: [
        'Носовой рым и рымы под кринолинами',
        'Носовой треугольник с ЭВА-покрытием',
        'Скуловой профиль',
        'Планширь с Т-пазом и привальным брусом',
        'Кринолины вровень с банкой, с ЭВА-покрытием',
        'Палубное покрытие MARIDECK в носу и кокпите, рояльные петли',
        'Шумоизоляция от носа до миделя',
        'Увеличенные швартовые утки — 4 шт.',
        'Два ревизионных люка',
      ]},
      { group: 'Рыбалка и хранение', items: [
        'Носовая фиш-платформа с двумя рундуками и дополнительным рундуком',
        'Якорный ящик и площадка под скрытую лебёдку',
        'Полки под спиннинги по бортам, обшивка SYNTEC',
        'Вварной межконсольный рундук с дополнительным отсеком',
        'Рундук в полу',
        'Рундук под ходовой тент в кормовой переборке',
        'Две площадки под датчик эхолота',
      ]},
      { group: 'Кокпит и управление', items: [
        'Поднятые консоли с изгибом, бардачок у пассажира',
        'Накладки на консоли, место под эхолот',
        'Кресла капитана и пассажира «Комфорт» на амортизационных стойках',
        'Съёмный кормовой диван-рундук с мягкими накладками',
        'Калёное полукруглое ветровое стекло Texico, межконсольная дверка',
        'Рулевое управление: штурвал из нержавейки, тросы, редуктор',
      ]},
      { group: 'Топливо и электрика', items: [
        'Стационарный бак 90 л с указателем уровня на консоли',
        'Два подиума под заливную горловину',
        'Ходовые огни, клотик, ключ массы, помпа',
        'Панель переключателей, поддон под АКБ',
        'USB-розетка и розетка 12 В',
      ]},
      { group: 'На выбор', items: [
        'Цвет бортов: тёмно-серый, бирюзовый, океанская синь или красный',
        'Транец L — 508 мм или XL — 635 мм',
      ]},
    ],
  },
};

export const formatPrice = (p) => p.toLocaleString('ru-RU').replace(/ | /g, ' ') + ' ₽';
