window.onload = function () {
  var canvas = document.getElementById("progressChart");
  var context = canvas.getContext("2d");

  // Data for the progress chart
  var progressData = [
    { name: "Jeans", progress: 70, color: "#475BE8" },
    { name: "Shirts", progress: 40, color: "#475BE8" },
    { name: "Belts", progress: 60, color: "#475BE8" },
    { name: "Caps", progress: 80, color: "#475BE8" },
    { name: "Others", progress: 20, color: "#475BE8" },
    // Add more progress data objects as needed
  ];
  context.fillStyle = "#292929";
  context.font = "700 18px Lato";
  context.fillText("Most Sold items", 10, 20);

  // Function to draw a progress bar
  function drawProgressBar(
    x,
    y,
    width,
    progress,
    color,
    name,
    progressBarBorderRadius,
    backgroundBarBorderRadius
  ) {
    // Calculate the progress bar width based on the provided width and progress
    var progressBarWidth = width * (progress / 100);

    // Draw the background bar with rounded corners
    context.fillStyle = "#ccc";
    context.beginPath();
    context.moveTo(x + backgroundBarBorderRadius, y);
    context.lineTo(x + width - backgroundBarBorderRadius, y);
    context.quadraticCurveTo(
      x + width,
      y,
      x + width,
      y + backgroundBarBorderRadius
    );
    context.lineTo(x + width, y + 5 - backgroundBarBorderRadius);
    context.quadraticCurveTo(
      x + width,
      y + 5,
      x + width - backgroundBarBorderRadius,
      y + 5
    );
    context.lineTo(x + backgroundBarBorderRadius, y + 5);
    context.quadraticCurveTo(x, y + 5, x, y + 5 - backgroundBarBorderRadius);
    context.lineTo(x, y + backgroundBarBorderRadius);
    context.quadraticCurveTo(x, y, x + backgroundBarBorderRadius, y);
    context.closePath();
    context.fill();

    // Draw the progress bar with rounded corners
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x + progressBarBorderRadius, y);
    context.lineTo(x + progressBarWidth - progressBarBorderRadius, y);
    context.quadraticCurveTo(
      x + progressBarWidth,
      y,
      x + progressBarWidth,
      y + progressBarBorderRadius
    );
    context.lineTo(x + progressBarWidth, y + 5 - progressBarBorderRadius);
    context.quadraticCurveTo(
      x + progressBarWidth,
      y + 5,
      x + progressBarWidth - progressBarBorderRadius,
      y + 5
    );
    context.lineTo(x + progressBarBorderRadius, y + 5);
    context.quadraticCurveTo(x, y + 5, x, y + 5 - progressBarBorderRadius);
    context.lineTo(x, y + progressBarBorderRadius);
    context.quadraticCurveTo(x, y, x + progressBarBorderRadius, y);
    context.closePath();
    context.fill();

    // Draw the progress text
    context.fillStyle = "#292929";
    context.font = "700 14px Lato";
    context.fillText(progress + "%", x + width - 25, y - 5);

    // Draw the name
    context.fillStyle = "#292929";
    context.font = "600 14px Lato";
    context.fillText(name, x, y - 8);
  }

  // Loop through the progress data and draw the progress bars
  for (var i = 0; i < progressData.length; i++) {
    var progressObj = progressData[i];
    var x = 10; // x-coordinate for the progress bar
    var y = 55 + i * 35; // y-coordinate for the progress bar
    var width = canvas.width - 20; // width of the progress bar
    var progress = progressObj.progress; // progress percentage
    var color = progressObj.color; // color of the progress bar
    var name = progressObj.name; // name of the progress chart
    var progressBarBorderRadius = 3; // border radius of the progress bar
    var backgroundBarBorderRadius = 3; // border radius of the background bar

    drawProgressBar(
      x,
      y,
      width,
      progress,
      color,
      name,
      progressBarBorderRadius,
      backgroundBarBorderRadius
    );
  }
};
