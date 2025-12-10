// Прелоадер
window.addEventListener("load", () => {
	const preloader = document.getElementById("preloader");
	preloader.classList.add("hidden");

	setTimeout(() => {
		preloader.remove();

		// Плавна поява елементів
		document.querySelectorAll(".fade-in").forEach((el) => {
			el.classList.add("visible");
		});
	}, 600); // після зникнення прелоадера
});
function updateLogo() {
	const logo = document.querySelector(".header__logo");

	if (window.innerWidth < 1028) {
		logo.textContent = "АБ";
	} else {
		logo.textContent = "Анна Бордуніс";
	}
}

// запуск при завантаженні сторінки
updateLogo();

// запуск при зміні розміру екрана
window.addEventListener("resize", updateLogo);
