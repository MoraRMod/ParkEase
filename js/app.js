document.addEventListener("DOMContentLoaded", function () {
	const iphoneS = document.getElementById("iphoneScanner");
	const fondoS = document.getElementById("fondoScanner");
	const blurS = document.getElementById("blurScanner");
	const testimonials = document.querySelectorAll(".testimonials__user");
	const radioButtons = document.querySelectorAll(".payment__radio");

	let slideIndex = 0;
	let timer;

	iphoneS.addEventListener("mouseover", () => {
		iphoneS.style.transition = "transform 0.3s";
		blurS.style.transition = "transform 0.3s";
		fondoS.style.transition = "transform 0.39s";
		iphoneS.style.transform = "scale(1.1)";
		blurS.style.transform = "scale(1.1)";
		fondoS.style.transform = "scale(1.1)";
	});

	iphoneS.addEventListener("mouseout", () => {
		iphoneS.style.transition = "transform 0.3s";
		blurS.style.transition = "transform 0.3s";
		fondoS.style.transition = "transform 0.39s";
		iphoneS.style.transform = "scale(1)";
		blurS.style.transform = "scale(1)";
		fondoS.style.transform = "scale(1)";
	});

	radioButtons.forEach((radioButton) => {
		radioButton.addEventListener("change", function () {
			document.querySelectorAll(".payment__methods").forEach((method) => {
				method.style.borderColor = "var(--cuarto)";
			});

			if (this.checked) {
				const parentMethod = this.closest(".payment__methods");
				if (parentMethod) {
					parentMethod.style.borderColor = "var(--terceario)";
				}
			}
		});
	});

	function showSlides(n) {
		for (let i = 0; i < testimonials.length; i++) {
			testimonials[i].style.display = "none";
		}

		if (n >= testimonials.length) {
			slideIndex = 0;
		}

		if (n < 0) {
			slideIndex = testimonials.length - 1;
		}

		testimonials[slideIndex].style.display = "block";
		slideIndex++;
		timer = setTimeout(() => {
			showSlides(slideIndex);
		}, 5000);
	}

	showSlides(slideIndex);
});
