// profile.js - Student Profile Page

// Student data
const students = {
  '2023167890': {
    initials: 'MF',
    name: 'Muhammad Farhan bin Abdullah',
    faculty: 'Information Technology',
    email: 'farhan2023@student.uitm.edu.my',
    phone: '012-345 6789',
    program: 'Bachelor in Information Technology'
  },
  '2023123456': {
    initials: 'AZ',
    name: 'Ahmad Zaki bin Ismail',
    faculty: 'Computer Science',
    email: 'zaki2023@student.uitm.edu.my',
    phone: '013-456 7890',
    program: 'Bachelor in Computer Science'
  },
  '2023145678': {
    initials: 'NA',
    name: 'Nurul Aina binti Hassan',
    faculty: 'Information Management',
    email: 'aina2023@student.uitm.edu.my',
    phone: '014-567 8901',
    program: 'Bachelor in Information Management'
  },
  '2023189012': {
    initials: 'SN',
    name: 'Siti Nurhaliza binti Ahmad',
    faculty: 'Computer Science',
    email: 'siti2023@student.uitm.edu.my',
    phone: '015-678 9012',
    program: 'Bachelor in Computer Science'
  },
  '2023201234': {
    initials: 'MR',
    name: 'Mohd Rizal bin Yusof',
    faculty: 'Information Management',
    email: 'rizal2023@student.uitm.edu.my',
    phone: '016-789 0123',
    program: 'Bachelor in Information Management'
  }
};

// Load profile on page load
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const studentId = params.get('id') || '2023167890';
  const student = students[studentId];

  if (student) {
    document.getElementById('profileAvatar').textContent = student.initials;
    document.getElementById('studentName').textContent = student.name;
    document.getElementById('studentId').textContent = studentId;
    document.getElementById('studentIdInfo').textContent = studentId;
    document.getElementById('facultyBadge').innerHTML = `<strong>Faculty:</strong> ${student.faculty}`;
    document.getElementById('studentEmail').textContent = student.email;
    document.getElementById('studentPhone').textContent = student.phone;
    document.getElementById('studentProgram').textContent = student.program;
  }
});