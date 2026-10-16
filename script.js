document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("active");
    toggle.classList.toggle("active");
  });
});

document.addEventListener("click", (e) => {
  document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
    if (!menu.parentElement.contains(e.target)) {
      menu.classList.remove("active");
    }
  });
});

const subscribeBtn = document.querySelector(".newsletter-form button");

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const isConfirmed = confirm("Are you sure?");
  if (isConfirmed) {
    alert("Subscribed!");
  }
});
