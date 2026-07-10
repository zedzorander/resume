const button = document.getElementById("menu-button");
const menu = document.getElementById("mobile-menu");

button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});