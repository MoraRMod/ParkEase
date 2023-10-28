const links = document.querySelectorAll(".navigation__link");
const iphoneScanner = document.getElementById("iphoneScanner");
const fondoScanner = document.getElementById("fondoScanner");
const blurScanner = document.getElementById("blurScanner");

let slideIndex = 0;
let timer;

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
	blurScanner.style.transition = "transform 0.3s";
	fondoScanner.style.transition = "transform 0.39s";
	iphoneScanner.style.transform = "scale(1.1)";
	blurScanner.style.transform = "scale(1.1)";
	fondoScanner.style.transform = "scale(1.1)";
});

iphoneScanner.addEventListener("mouseout", () => {
	iphoneScanner.style.transition = "transform 0.3s";
	blurScanner.style.transition = "transform 0.3s";
	fondoScanner.style.transition = "transform 0.39s";
	iphoneScanner.style.transform = "scale(1)";
	blurScanner.style.transform = "scale(1)";
	fondoScanner.style.transform = "scale(1)";
});

function plusSlides(n) {
	clearTimeout(timer);
	showSlides((slideIndex += n));

	timer = setTimeout(showSlides, 7000);
}

function showSlides() {
	const slides = document.getElementsByClassName("testimonials__user");

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}

	if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	}

	slides[slideIndex].style.display = "block";

	setTimeout(() => {
		slides[slideIndex].style.opacity = 1;
	}, 10);

	slideIndex++;
	timer = setTimeout(showSlides, 5000);
}

showSlides();
