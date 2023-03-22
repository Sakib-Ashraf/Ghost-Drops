   $(function () {
	$("._modal .modal-dialog").wrap("<div class='wrap'></div>");
	$("._modal").append("<button type='button' id='cross_btn' class='close' data-dismiss='modal' aria-label='Close'><span></span></button><div class='shape'><svg width='100%' height='100%' viewBox='0 0 1440 800' preserveAspectRatio='none'><path d='M-22.4 -87.7C-30.7,8.200000000000003,34.5,488.1,194.2,496c189.3,9.4,264.6 -232.7,431.3 -231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1 -828.5,368.6 -954.8C1455.9 -324.1,34.5 -746.7 -22.4 -87.7z'></path></svg></div>");
	$(document).on("click", "[data-toggle='modal']", function () {
		target = $(this).attr("data-target");
		// target = target.replace(".", "");
		console.log(target);
		$("._modal[data-target='" + target + "']").animate(
			{
				top: 0,
			},
			1500
		);
		setTimeout(function () {
			$("._modal[data-target='" + target + "']").addClass("active");
		}, 1500);
	});
	$(document).on("click", "button#cross_btn", function () {
		$(this).parent("._modal").animate(
			{
				top: "-200vh",
			},
			1000
		);
		setTimeout(function () {
			$("._modal").removeClass("active");
		}, 750);
	});
});