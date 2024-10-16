const Current = document.getElementById('myChart2');
let myChart2;

// Function to create the chart
function createChart2() {
  if (myChart2) {
    myChart2.destroy(); // Destroy the existing chart instance if it exists
  }

  myChart2 = new Chart(Current, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
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
createChart2();

// Redraw the chart on window resize to ensure proper scaling
window.addEventListener('resize', createChart2);
