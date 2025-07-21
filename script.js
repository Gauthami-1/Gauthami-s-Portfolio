let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

window.addEventListener("scroll", () => {
    const timeline = document.querySelector(".experience-timeline");
    const fillBar = document.querySelector(".timeline-fill");
    const scrollDot = document.querySelector(".scroll-dot");

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const timelineTop = scrollTop + rect.top;
    const timelineHeight = timeline.offsetHeight;

    const scrollProgress = Math.min(
      Math.max((scrollTop + windowHeight / 2 - timelineTop) / timelineHeight, 0),
      1
    );

    const fillHeight = scrollProgress * timelineHeight;

    fillBar.style.height = fillHeight + "px";
    scrollDot.style.top = fillHeight + "px";
});
