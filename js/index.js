window.addEventListener("load", () => {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	var drawing = false;

	var start = event => {
		drawing = true;
		draw(event);
	};

	var end = () => {
		drawing = false;
		ctx.beginPath();
	};

	var draw = event => {
		if (!drawing) return;
		ctx.lineWidth = 10;
		ctx.lineCap = "round";
		ctx.strokeStyle = "#000";

		ctx.lineTo(
			event.clientX - event.offsetLeft,
			event.clientY - event.offsetTop
		);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(
			event.clientX - event.offsetLeft,
			event.clientY - event.offsetTop
		);
	};

	canvas.addEventListener("mousedown", start);
	canvas.addEventListener("mouseup", end);
	canvas.addEventListener("mousemove", draw);
});
