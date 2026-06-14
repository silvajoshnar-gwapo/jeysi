document.addEventListener("DOMContentLoaded", () => {


  const openLetterBtn = document.getElementById("openLetterBtn");
  const timelineContent = document.querySelector(".timeline-container");

  if (openLetterBtn && timelineContent) {
    openLetterBtn.addEventListener("click", () => {
      timelineContent.scrollIntoView({ behavior: "smooth" });
    });
  }

  
  const openMemory = document.getElementById("openMemory");
  const memorySection = document.getElementById("memorySection");

  if (openMemory && memorySection) {
    openMemory.addEventListener("click", () => {

      memorySection.classList.toggle("show");

      memorySection.scrollIntoView({
        behavior: "smooth"
      });

    });
  }

  let starCount = 0;
  let starInterval;

  function createStar() {
    if (starCount >= 60) return;

    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.bottom = "-20px";

    const size = Math.random() * 15 + 11;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(star);
    starCount++;

    setTimeout(() => {
      star.remove();
      starCount--;
    }, 8000);
  }


  function startStars() {
    if (!starInterval) {
      starInterval = setInterval(createStar, 250);
    }
  }

  function stopStars() {
    clearInterval(starInterval);
    starInterval = null;
  }

  // start stars on load
  startStars();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopStars();
    } else {
      startStars();
    }
  });

});