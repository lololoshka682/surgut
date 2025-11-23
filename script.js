// Установка названия сайта
document.getElementById('siteTitle').textContent = 'Кримперы';

// Установка основного изображения
const imageElement = document.getElementById('mainImage');
imageElement.src = 'https://avatars.mds.yandex.net/get-mpic/5209949/img_id2587518218470434877.jpeg/orig';
imageElement.alt = 'Приветственное изображение';

// Установка приветствия
document.getElementById('greetingText').textContent = 'Мы инициативная, юная и дружная команда из трёх человек под названием "Кримперы" и мы приветствуем вас на нашем сайте.';
document.getElementById('greetingMessage').textContent = "Наш девиз: Сжимаем проблемы — выпускаем решения.";

// Установка нижней картинки
const bottomImageElement = document.getElementById('bottomImage');
bottomImageElement.src = 'https://i.pinimg.com/736x/8c/b6/1f/8cb61f5c432e146e4b9aad26cc5effbb.jpg';
bottomImageElement.alt = 'Наша команда в работе';

// Подпись для нижней картинки (можно убрать, если не нужна)
document.getElementById('bottomImageCaption').textContent = '';

// Анимация появления элементов
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.header, .image-container, .greeting, .bottom-image-container');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
});