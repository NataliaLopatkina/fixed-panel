console.log("Hello! I\"m Fixed panel 😊.");

$(document).ready(function(){
    

var sidebar = $(".container__sidebar"); // Сайдбар
var container = $(".container__content"); // Блок контент
var lastScrollTop = 0; // Значение scrollTop

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop(); // Количество пикселей, прокрученных от верха элемента
    var heightWindow = $(window).innerHeight(); // Высота экрана
    var offsetTop = sidebar.offset().top; // Расстояние от верхней точки экрана
    var heightSidebar = sidebar.innerHeight(); // Высота с учетом внутренних отступов
    var offsetBottom = heightWindow - offsetTop - heightSidebar; // Расстояние от нижней точки экрана
    //var offsetBottom = offsetTop + heightSidebar; // Расстояние от нижней точки экрана
    var heightHeader = $(".header").innerHeight(); //Высота header
    var footerPosition = $(".footer").offset().top; // Количество пикселей от верха до footer
    var headerPosition = $(".header").offset().top; // Количество пикселей от верха до header

    if (heightSidebar > heightWindow) { // Условие высоты сайдбара
        if (lastScrollTop < scrollTop) { // Условие скролла вверх
            if (scrollTop >= -offsetBottom) { // Условие фиксации сайдбара
            //if (scrollTop + heightSidebar >= offsetBottom) { // Условие фиксации сайдбара
                var top = scrollTop + offsetBottom + offsetTop - heightHeader; // Значение top при фиксированном sidebar
                sidebar.addClass("sticky"); // Добавление класса
                sidebar.css("top", top);  // Добавление значения top

                if (scrollTop + heightWindow >= footerPosition) { // Условие при приближении к footer
                    sidebar.css("top", "");  // Добавление значения top
                    sidebar.css("bottom", "0"); // Добавление значения bottom
                }
            }

            else {
                sidebar.removeClass("sticky"); // Удаление класса
                sidebar.css("top", ""); // Удаление свойства top
                sidebar.css("bottom", ""); // Удавление свойства bottom
            }
        }

        if (lastScrollTop > scrollTop) { // Условие скролла вниз
            if (scrollTop <= offsetTop) { // Условие фиксации скролла
                var top = scrollTop - heightHeader; // Значение top при фиксированном sidebar
                sidebar.css("top", top); // Добавление значения top
            }

            if (scrollTop <= headerPosition + heightHeader) { // Условие при приближении к header
                sidebar.css("top", "0"); // Обнуление значения top
            }
        }

        lastScrollTop = scrollTop; // Присвоение scrollTop текущего значение
    }

    else { // Условие при высота sidebar < высоты экрана
        sidebar.addClass("sticky-small");
        sidebar.css("top", scrollTop - heightHeader); // Если position absolute

        if (scrollTop <= headerPosition + heightHeader) { // Условие при приближении к header
            sidebar.css("top", "0"); // Обнуление значения top
        }
    }
});


});
