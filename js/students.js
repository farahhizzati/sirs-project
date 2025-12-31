// students.js - Student List Page

// View profile function
function viewProfile(studentId) {
  window.location.href = `profile.html?id=${studentId}`;
}

// Make rows clickable (except button area)
document.addEventListener('DOMContentLoaded', () => {
  const tableRows = document.querySelectorAll('.modern-table tbody tr');
  
  tableRows.forEach(row => {
    row.addEventListener('click', (e) => {
      // Don't navigate if clicking on button
      if (e.target.closest('.view-profile-btn')) {
        return;
      }
      
      const studentId = row.getAttribute('data-id');
      window.location.href = `profile.html?id=${studentId}`;
    });
  });
});