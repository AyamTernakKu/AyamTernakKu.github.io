export async function navbar() {
  const list = document.querySelectorAll(".navbar .nav .nav-main .links a");

  list.forEach((link) => {
    const href = link.getAttribute("href");

    // Tambahkan atau hapus class 'active' sesuai dengan path
    if (window.location.pathname === href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Logika untuk login/logout tetap sama
  const loginCookie = window.Cookies.get("login");
  const logoutButton = document.querySelector(".nav-others .logout");
  const loginButton = document.querySelector(".nav-others .to-login");

  if (logoutButton) {
    if (loginCookie) {
      logoutButton.style.display = "inline-block";
      loginButton.style.display = "none";
    } else {
      logoutButton.style.display = "none";
      loginButton.style.display = "inline-block";
    }
  }
}
