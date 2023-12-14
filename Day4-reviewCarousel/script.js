const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem quia vero provident! Voluptate natus facilis, totam non maiores vero corporis. Vitae consequatur porro pariatur sequi! Dolores neque laboriosam vero?",
    author: "Steave Smith",
  },
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ut quod optio incidunt aperiam architecto voluptatibus laboriosam eius quos labore asperiores nesciunt modi culpa saepe ullam, nobis, ipsum dolorem odio.",
    author: "Rohit Sharma",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla esse tenetur, fugit, culpa aspernatur laborum cumque veritatis voluptatum, impedit nostrum enim non assumenda vero cupiditate illo aliquam ipsum iste expedita.",
    author: "Virat Kohli",
  },
];
let currentTestimonial = 0;

const testimonialElem = document.getElementById("testimonial");
const authorElem = document.getElementById("author");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function showTestimonials() {
  testimonialElem.innerText = testimonials[currentTestimonial].text;
  authorElem.innerText = testimonials[currentTestimonial].author;
}

function prevTestimonial() {
  currentTestimonial = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
  showTestimonials();
}

function nextTestimonial() {
    currentTestimonial = currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1;
    showTestimonials();
}

showTestimonials();
prevBtn.addEventListener("click", prevTestimonial);
nextBtn.addEventListener("click", nextTestimonial);



