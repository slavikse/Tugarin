# Tugarin

### Команды
Запуск: `npm run serve`  
Сборка: `npm run build`  
Путь: `out/make/squirrel.windows/x64`

## Задачи:
удаление блоков сломалось. удалив 1 - удаляет еще несколько

* Столкновение с блоком: Пристыковка блока. стыковать на месте столкновения.
У блоков есть стороны. стыковать к ним. прилипание. много блоков прилипнут
* главный блок (ячейка). выделить цветом.
* при разрушении блока, если он обрывает связи с другими блоками, то всё, что не из главного блока должно быть разрушено

* разные размеры блоков

* выделить главную ячейку. потеряв ее, игрок проиграет.
* игрок собирает блоки, делая защитный нарост. этими блоками можно стрелять.

* блоки - это валюта.
* продумать появление блоков.
* у блоков есть тип: нейтральный - можно собирать.
* блоки стены не пускают игрока.
* блоки стены можно разрушить выстрелом.
* блок - это топливо. текстура блока отражает количество топлива.
* чем больше блоков - тем медленнее скорость передвижения и наоборот.

кнопка для запуска сначала.
* для новой игры сбрасывать некоторые состояния по умолчанию.

* генерация блоков. блоки должны быть случайно соединены между собой.

* Блуждающие враги. Движение в одну сторону.
* Целенаправленное движение врагов.
* Враги могут собирать бллоки
* Враги с помощью луча определяют место положения игрока и движутся к его сторону (поиск пути)

* фигурка героя выстраивается самим героем:
* блок оружия, которое разместив где нибудь, можно будет стрелять. при стрельбе отлетает блок.
* мир будет генерироваться. все игроки будут в условиях генерации. никакого сохранённого мира.
    * можно разрушать. можно строить?

* Отрисовка текстур: игрок, враги, преграды, иголки.

* магазин. в области магазина игрок не будет иметь гравитации.

* управление на джойстиках. купить контроллер для xbox 360

* IndexedDB - https://github.com/localForage/localForage
* web audio
* частицы для эффектов?
* постобработка

* Использовать идеи внимания?
* Сетевая игра?

* Локализация: RU EN.

*** Режим: смена сеттинга: 2д с видом сбоку
* гравитация. прикрепив блоки на персонажа, он будет иметь силу тяжести, перевес если где то есть перекос. вращение?
