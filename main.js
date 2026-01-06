// ================= Scroll-to-top Button =================
const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.innerHTML = "&#8679;"; // up arrow
document.body.appendChild(scrollBtn);

// Button behavior
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// ================= Optional: Smooth scroll for navbar links =================
document.querySelectorAll('#navbar-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if(targetSection){
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
