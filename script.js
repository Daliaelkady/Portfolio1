// Hide header on scroll down, show on scroll up
let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// Show Egypt time in footer
function updateTime() {
  const now = new Date();
  const egyptTime = now.toLocaleString("en-US", { timeZone: "Africa/Cairo" });
  const [, time] = egyptTime.split(", ");
  timeText.textContent = `${time} GMT+2`;
}

updateTime();
setInterval(updateTime, 1000);

// Set copyright year
const yearText = document.getElementById("year");
const year = new Date().getFullYear();
yearText.textContent = year;
// Simple interaction for skills icons
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', () => {
      alert(`You clicked on ${skill.getAttribute('title')} skill!`);
    });
  });
  
  // Dynamic year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
 