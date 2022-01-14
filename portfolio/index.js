console.log ('Ваша оценка - 110 баллов\n' +
'Отзыв по пунктам ТЗ:\n' +
'Выполненные пункты:\n' +
'1) Вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/.\n' +
'Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show."\n' +
'В таком случае баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но\n' +
'нет ошибок - errors, выставляем половину баллов за пункт требований\n' +
'2) header, main, footer\n' +
'3) шесть элементов section (по количеству секций)\n' +
'4) только один заголовок h1\n' +
'5) пять заголовков h2 (количество секций минус одна, у которой заголовок h1)\n' +
'6) один элемент nav (панель навигации)\n' +
'7) два списка ul > li > a (панель навигации, ссылки на соцсети)\n' +
'8) десять кнопок button\n' +
'9) два инпута: input type="email" и input type="tel"\n' +
'10) один элемент textarea\n' +
'11) три атрибута placeholder\n' +
'12) блок header\n' +
'13) секция hero\n' +
'14) секция skills\n' +
'15) секция portfolio\n' +
'16) секция video\n' +
'17) секция price\n' +
'18) секция contacts\n' +
'19) блок footer\n' +
'20) для построения сетки используются флексы или гриды\n' +
'21) при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону\n' +
'22) фоновый цвет тянется на всю ширину страницы\n' +
'23) иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат,\n' +
'а не на способ добавления\n' +
'24) изображения добавлены в формате .jpg\n' +
'25) есть favicon\n' +
'26) плавная прокрутка по якорям\n' +
'27) ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/\n' +
'28) интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства\n' +
'cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете\n' +
'указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете\n' +
'их по своему усмотрению, руководствуясь общим стилем макета\n' +
'29) обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не\n' +
'влияющее на соседние элементы\n');

const hamburgerButton = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const blackout = document.createElement('div');
document.body.append(blackout);

hamburgerButton.addEventListener('click', function () {
  hamburgerButton.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  navList.classList.toggle('is-active');
  blackout.classList.toggle('blackout');
});

function closeMenu() {
  if (event.target.classList.contains('nav-link')) {
    hamburgerButton.classList.remove('is-active');
    nav.classList.remove('is-active');
    navList.classList.remove('is-active');  
    blackout.classList.toggle('blackout');
  }
}
nav.addEventListener('click', closeMenu);