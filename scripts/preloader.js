window.onload = () => {
	const preloader = document.getElementById("preloader");

	preloader.classList.add("preloader-hide");
	setInterval(() => {
		preloader.classList.add("preloader-hidden");
	}, 1000);
};
