// setup
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct"],
  datasets: [
    {
      label: "Profit",
      data: [100, 80, 83, 65, 80, 50, 60,80,75,75],
      backgroundColor: "#475BE8",
      borderColor: "rgba(255, 26, 104, 1)",
      borderWidth: 0,
      borderRadius: 3,
      barPercentage: 0.9, // Adjust the width of the bars (0.0 - 1.0)
      categoryPercentage: 0.6, // Adjust the spacing between the bars (0.0 - 1.0)
    },
    {
      label: "loss",
      data: [65, 60, 25, 85, 60, 25, 30,60,55,55],
      backgroundColor: "#E3E7FC",
      borderColor: "rgba(255, 26, 104, 1)",
      borderWidth: 0,
      borderRadius: 3,
      barPercentage: 0.9, // Adjust the width of the bars (0.0 - 1.0)
      categoryPercentage: 0.6, // Adjust the spacing between the bars (0.0 - 1.0)
    },
  ],
};

const config = {
  type: "bar",
  data,
  options: {
    plugins: {
      legend: {
        labels: {
          boxWidth: 12, // Adjust the width of the legend color box
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove the background lines
        },
        ticks: {
          stepSize: 20, // Set the interval between each value on the y-axis
          callback: function (value) {
            return value + "k"; // Add "k" suffix to each tick value
          },
        },
      },
      x: {
        grid: {
          display: false, // Remove the background lines
        },
      },
    },
  },
};

const convertedData = {
  labels: data.labels,
  datasets: data.datasets.map((dataset) => ({
    ...dataset,
    data: dataset.data.map((value) => parseInt(value)),
  })),
};
// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

// Instantly assign Chart.js version
const chartVersion = document.getElementById("chartVersion");
chartVersion.innerText = Chart.version;
