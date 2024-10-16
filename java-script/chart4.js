const Energy = document.getElementById('myChart4');
let myChart4;

// Function to create the chart
function createChart4() {
  if (myChart4) {
    myChart4.destroy(); // Destroy the existing chart instance if it exists
  }

  myChart4 = new Chart(Energy, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
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
createChart4();

// Redraw the chart on window resize to ensure proper scaling
window.addEventListener('resize', createChart4);
