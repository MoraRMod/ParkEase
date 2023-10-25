const links = document.querySelectorAll(".navigation__link");

links.forEach((link) => {
	link.addEventListener("mouseover", () => {
		link.style.transform = "scale(1.15)";
	});

	link.addEventListener("mouseout", () => {
		link.style.transform = "scale(1)";
	});
});
