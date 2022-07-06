const box = document.querySelectorAll(".box");

box.forEach((i) => {
	i.addEventListener("click", function () {
		box.forEach((el) => el.classList.remove("active"));
		this.classList.add("active");
	});
});
