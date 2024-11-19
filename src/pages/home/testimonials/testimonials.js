export default function testimonial() {
  const testimonialsSlider = document.querySelector(".testimonials-slider");
  const testimonialItems = document.querySelectorAll(".testimonial-item");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dots = document.querySelectorAll(".dot");

  if (
    !testimonialsSlider ||
    !testimonialItems.length ||
    !prevBtn ||
    !nextBtn ||
    !dots.length
  ) {
    console.error("Testimonials slider elements not found!");
    return;
  }

  let currentSlide = 0;

  const updateSlider = () => {
    testimonialItems.forEach((item, index) => {
      item.classList.toggle("active", index === currentSlide);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  };

  prevBtn.addEventListener("click", () => {
    currentSlide =
      currentSlide === 0 ? testimonialItems.length - 1 : currentSlide - 1;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % testimonialItems.length;
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });

  updateSlider();
}
