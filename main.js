$(document).ready(function () {
	$(".filter").on("change", function (e) {
		e.preventDefault();

		var filter = $(this).val();

		$(".item.active").removeClass("active");
		$(".disease.active").removeClass("active");

		$("." + filter).addClass("active");
	});

	$(".disease").on("click", function (e) {
		var disease = $(this);
		if (disease.hasClass("active")) {
			disease.removeClass("active");
		} else {
			disease.addClass("active");
		}
	});
});