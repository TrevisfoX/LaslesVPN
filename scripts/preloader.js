window.onload = () => {
	const preloader = document.getElementById("preloader");

	preloader.classList.add("preloader-hide");
	setTimeout(() => {
		preloader.classList.add("preloader-hidden");
	}, 1000);
};
