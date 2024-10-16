const Power = document.getElementById('myChart3');
let myChart3;

function createChart3() {
  if (myChart3) {
    myChart3.destroy(); // Destroy the existing chart instance if it exists
  }

  myChart3 = new Chart(Power, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
createChart3();

// Redraw the chart on window resize to ensure proper scaling
window.addEventListener('resize', createChart3);
