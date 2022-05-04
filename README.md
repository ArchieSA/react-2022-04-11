# react-2022-04-11
# ДЗ.

## Как делать:

0. Сделать форк этого репозитория в свой аккаунт (только 1 раз в самом начале).

1. Перед выполнением ДЗ сделайте пул мастера этого репозитория себе в форк (чтобы иметь актуальный код);
2. Обновить зависимости `yarn` или `npm i`;
3. Создайте новую ветку от актуального мастера для выполнения ДЗ;
4. Выполните ДЗ в этой ветке;
5. Сделайте Pull Request этой ветки в мастер моего репозитория;
6. Напишите мне (a.senyukov@javascript.info) письмо со ссылкой на PR.

**Важно! В результате всех этих манипуляций в вашем мастере должны быть только мои комиты, все ваши комиты должны быть в отдельных ветках под каждую домашку.**

Дедлайн – 23:00 по GMT+3 за день до занятия.

## HT1

1. Создать компонент **Rate**, который принимает рейтинг (число от 1 до 5) и отображает его цифрой.(высчитать средний и reviews) Например `<Rate value={3} />`. Отрисовываем в компоненте Restaurant.
2. Создать компонент **Reviews**, который принимает все ревью по одному ресторану и отображает имена и отзывы про ресторан, а так же рейтинг с помощью компонента **Rate**.

## HT2

1. Добавить в компонент Rate отображение звездочек свг для корректного отображения рейтинга(Иконка есть в папке forTheFirstLesson).
2. В компоненте ресторанов отрисовать кнопки с названиями ресторанов, по клику на которые выбирается ресторан.
3. В форму добавления ревью добавить возможность проставить рейтинг(ввод только чисел). При изменении имени ретинг в форме сбрасывается как и текст. Добавить поле и доработать reducer.
4. Доп задание: вместо инпута рейтинга сделать звездочки по клику на которые будет вводится рейтинг.


## HT3

1. Написать тесты на остальные компоненты в features.

## HT4

1. Реализовать компонент Basket + BasketContainer(где будет логика работы со стором);
2. Basket отображает выбранные нами продукты (Название      количество) из стора;
3. В компоненте есть кнопка сбросить заказ, по клику на которую мы удаляем все заказанные продукты из корзины (очищаем стейт в модуле basket).

## HT5

1. Добавить в модуль продуктов такую же структуру как и в остальных модулях (restaurant, review).
2. Отрисовать меню ресторана, используя данные из модулей.