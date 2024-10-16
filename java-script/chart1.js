const Voltage = document.getElementById('myChart');
let myChart;

// Function to create the chart
function createChart() {
  if (myChart) {
    myChart.destroy(); // Destroy the existing chart instance if it exists
  }

  myChart = new Chart(Voltage, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgb(104, 39, 39)',
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Create the chart initially
createChart();

// Redraw the chart on window resize to ensure proper scaling
window.addEventListener('resize', createChart);
