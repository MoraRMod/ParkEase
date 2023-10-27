const links = document.querySelectorAll(".navigation__link");
const iphoneScanner = document.getElementById("iphoneScanner");
const fondoScanner = document.getElementById("fondoScanner");

links.forEach((link) => {
	link.addEventListener("mouseover", () => {
		link.style.transform = "scale(1.15)";
	});

	link.addEventListener("mouseout", () => {
		link.style.transform = "scale(1)";
	});
});

iphoneScanner.addEventListener("mouseover", () => {
	iphoneScanner.style.transition = "transform 0.3s";
	fondoScanner.style.transition = "transform 0.39s";
	iphoneScanner.style.transform = "scale(1.1)";
	fondoScanner.style.transform = "scale(1.1)";
});

iphoneScanner.addEventListener("mouseout", () => {
	iphoneScanner.style.transition = "transform 0.3s";
	fondoScanner.style.transition = "transform 0.39s";
	iphoneScanner.style.transform = "scale(1)";
	fondoScanner.style.transform = "scale(1)";
});
