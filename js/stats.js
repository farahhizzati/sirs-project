// stats.js

// Monthly Reports Chart
const monthlyCtx = document.getElementById('monthlyChart');
if(monthlyCtx){
  new Chart(monthlyCtx, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Reports',
        data: [12,19,9,14,20,15,18,16,10,12,14,19],
        borderColor: '#7c3aed',
        backgroundColor: 'rgba(124,58,237,0.2)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true } }
    }
  });
}

// Status Distribution Chart
const statusCtx = document.getElementById('statusChart');
if(statusCtx){
  new Chart(statusCtx, {
    type: 'doughnut',
    data: {
      labels: ['Resolved','Pending','In Progress'],
      datasets: [{
        data: [50,30,20],
        backgroundColor: ['#57274eff','#7e497aff','#c892d6ff']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}
