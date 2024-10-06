const vis = document.getElementById('av-id')
const block = document.querySelector(".image")
vis.addEventListener("click", function(){
    block.classList.toggle("vis")
})

const activatemenu = document.getElementById("change-menu")
const visiblemenu = document.querySelector(".fullmenu");

activatemenu.addEventListener("click", () => {
    visiblemenu.classList.toggle("fullmenu-changed");
})