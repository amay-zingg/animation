// * * * * SVG BURGER
const toppingButtons = document.querySelector(".toppings");
const seedButton = document.querySelector("#seeds");
const lettuceButton = document.querySelector("#lettuce");
const ketchupButton = document.querySelector("#ketchup");
const cheeseButton = document.querySelector("#cheese");

const seeds = document.querySelector(".seeds");
const lettuce = document.querySelector(".lettuce");
const ketchup = document.querySelector(".ketchup");
const cheese = document.querySelector(".cheese");

seedButton.addEventListener("click", (e) => {
  seeds.classList.toggle("removed");
});

lettuceButton.addEventListener("click", (e) => {
  lettuce.classList.toggle("removed");
});

cheeseButton.addEventListener("click", (e) => {
  cheese.classList.toggle("removed");
});

ketchupButton.addEventListener("click", (e) => {
  ketchup.classList.toggle("removed");
});

// * * * * CLIP PATH WRITING

function frameOne() {
  gsap.set([".word"], { autoAlpha: 1 });

  var tl = gsap.timeline({ delay: 0.2 });

  tl.from(
    [".word"],
    { duration: 0.75, xPercent: -100, ease: "sine.out" },
    "sync-=0.3"
  );
  tl.from(
    [".word"],
    { duration: 0.75, xPercent: 100, ease: "sine.out" },
    "sync-=0.3"
  );

  var frameDelay = 2;
  gsap.to([".word"], {
    duration: 0.25,
    opacity: 0,
    ease: "sine.out",
    delay: frameDelay,
  });
}

frameOne();