# Tugarin

### Команды
Запуск: `npm run serve`  
Сборка: `npm run build`  
Путь: `out/make/squirrel.windows/x64`

## Задачи:

загрузочный экран. на момент запуска приложения там серый экран

кнопка для запуска сначала.

* чем больше блоков - тем медленнее скорость передвижения и наоборот.

* Столкновение с блоком: Пристыковка блока.
    * у блоков есть стороны. стыковать к ним.

* Столкновение с преградой: Сдвиг блока и всех подчинённых блоков.
* Столкновение с колючкой: Уничтожение блока.

* Блуждающие враги. Движение в одну сторону.
* Целенаправленное движение врагов.
* Враги с помощью луча определяют место положения игрока и движутся к его сторону (поиск пути)

* гравитация. прикрепив блоки на персонажа, он будет иметь силу тяжести, перевес если где то есть перекос.
* кадр, внутри которого игрок перемещается без смещения всей сцены, а при приближении к краю кадра, кадр выравнивается
по центру игрока

* для новой игры сбрасывать некоторые состояния по умолчанию.

* фигурка героя выстраивается самим героем:
- собрав блок, игрок выбирает место его размещения?
- блок оружия, которое разместив где нибудь, можно будет стрелять и тут надо подумать от куда брать блоки.
стрелять будет блоками, который насобирал герой. никакого скрытого инвентаря не будет.
- строительство блоками, которые так же берутся из игрока.
* при стрельбе отлетает блок.
мир будет генерироваться. все игроки будут в условиях генерации. никакого сохранённого мира. только динамика.
можно разрушать, но нельзя строить.
* Отрисовка текстур: игрок, враги, преграды, иголки.

* управление на джойстиках. купить контроллер для xbox 360

* частицы для эффектов?

* вверху полоска под интерфейс. в самой верхней точке при наводе мыши появляется курсор.

* Использовать идеи внимания?
* Сетевая игра.

* Переводы: RU EN.
