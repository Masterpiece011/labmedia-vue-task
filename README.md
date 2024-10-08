Для реализации тестового задания использовался следующий стек – HTML, CSS, VueJs, Vite.

Функционал:

Таблица содержит:
• Имя пользователя.
• E-mail.
• Дата регистрации.
• Рейтинг пользователя.

Реализован поиск пользователей по имени пользователя или e-mail адресу при совпадении введенного запроса без учета регистра.

Реализована кнопка очистить фильтр, появляющаяся при активном поиске, либо при применении сортировки по любому из полей. При нажатии на кнопку выполняется сброс фильтра поиска и сортировки.

Реализована пагинация, есть возможность переходить по страницам. На странице отображается 5 пользователей.

Реализована возможность удаления из таблицы:
• При нажатии на крестик выводится модальное окно с фразой «Вы уверены, что хотите удалить пользователя» и кнопки «Да», «Нет».
• При нажатии на «Нет», модальное окно закрывается.
• При нажатии на «Да» пользователь удаляется из таблицы на стороне клиента (при обновлении страницы он снова отображается).
• При использовании фильтров после удаления пользователя, он не показывается в списках.
• При открытом модальном окне все другие активности невозможны, кроме как в окне.
• Удалить пользователя из таблицы можно при любой фильтрации или сортировке.

Реализавана сортировка таблицы:
• При нажатии на «Дата регистрации» в сортировке список сортируется по дате регистрации от наибольшей даты к наименьшей, при повторном нажатии на активное поле сортировки дата список сортируется по дате от наименьшей даты к наибольшей.
• При нажатии на «Рейтинг» в сортировке список сортируется по полю «Рейтинг» по возрастанию/убыванию аналогично полю «Дата регистрации».
• Сортировать возможно и пользователей для которых применили фильтр.


Ссылка на макет: https://www.figma.com/file/Ie7OB6ojFjU4a1YEGZ5OXE/%D0%9E%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%82%D1%8C-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%83-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8-(Copy)?node-id=101%3A2

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
