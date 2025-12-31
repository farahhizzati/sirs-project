// js/report.js
const reportForm = document.getElementById('reportForm');
const successMsg = document.getElementById('successMsg');

reportForm.addEventListener('submit', function(e){
  e.preventDefault();
  successMsg.classList.remove('d-none');
  reportForm.reset();
  setTimeout(() => { successMsg.classList.add('d-none'); }, 3000);
});
