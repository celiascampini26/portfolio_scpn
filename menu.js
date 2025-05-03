
  const menuBtn = document.getElementById("menuBtn");
  const circleMenu = document.getElementById("circleMenu");
  const icon = menuBtn.querySelector("span");
  const container = document.getElementById("menuContainer");

  // Toggle menu
  menuBtn.addEventListener("click", () => {
    circleMenu.classList.toggle("show");
    icon.textContent = circleMenu.classList.contains("show") ? "-" : "+";
  });

  // Drag & drop
  let isDragging = false;
  let offsetX = 0, offsetY = 0;

  menuBtn.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - container.offsetLeft;
    offsetY = e.clientY - container.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      container.style.left = `${x}px`;
      container.style.top = `${y}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
