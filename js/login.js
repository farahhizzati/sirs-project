// Admin authentication 
function login(e){
  e.preventDefault();

  const adminId = document.getElementById("adminId").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Hardcoded admin credentials
  if(adminId === "admin001" && password === "admin123"){
    window.location = "dashboard.html";
  } else {
    error.classList.remove("d-none");
  }
}