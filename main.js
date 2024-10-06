const changeBtn = document.getElementById('click-theme');
const links = document.querySelectorAll('#link'); // Получаем все ссылки с классом link

changeBtn.addEventListener("click", function() {
    document.getElementById("chbtn").classList.toggle('back');
    links.forEach(link => {
        link.classList.toggle('nav'); // Меняем класс для каждой ссылки
    });
});