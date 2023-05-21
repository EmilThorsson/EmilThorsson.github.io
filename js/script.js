 let timeline = gsap.timeline();

  parallax_el.forEach((el) => {
    timeline.from(
      el,
      {
    top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
    duration: 1,
  },
  "1"
  );
  })