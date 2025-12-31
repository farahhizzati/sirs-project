// dashboard.js

// Weekly Issue Chart
const ctx = document.getElementById('issueChart');
if(ctx){
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      datasets: [
        { label: 'New Reports', data: [5,8,6,9,7,4,3], backgroundColor: '#7c3aed' },
        { label: 'Resolved', data: [3,5,4,6,5,3,2], backgroundColor: '#c4b5fd' }
      ]
    },
    options: { 
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}
