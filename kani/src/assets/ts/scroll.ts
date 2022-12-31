import { ref } from "vue";

// get all the sections on the page
const sections = document.querySelectorAll("section");

// track the current section index
let currentSectionIndex = 0;

// add a wheel event listener to the document
document.addEventListener("wheel", (event: WheelEvent) => {
  // check if the user has scrolled up or down
  if (event.deltaY > 0) {
    // the user has scrolled down - scroll to the next section
    currentSectionIndex = Math.min(
      currentSectionIndex + 1,
      sections.length - 1
    );
    const nextSection = sections[currentSectionIndex];
    window.scrollTo(0, nextSection.offsetTop);
  } else {
    // the user has scrolled up - scroll to the previous section
    currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    const previousSection = sections[currentSectionIndex];
    window.scrollTo(0, previousSection.offsetTop);
  }
});

export default {
  next: () => {
    currentSectionIndex = Math.min(
      currentSectionIndex + 1,
      sections.length - 1
    );
    const nextSection = sections[currentSectionIndex];
    window.scrollTo(0, nextSection.offsetTop);
  },
  previous: () => {
    currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    const previousSection = sections[currentSectionIndex];
    window.scrollTo(0, previousSection.offsetTop);
  },
};

// declare module "src/assets/ts/scroll";

// // get all the sections on the page
// const sections = document.querySelectorAll("section");

// // track the current section index
// let currentSectionIndex = 0;

// // add a wheel event listener to the document
// document.addEventListener("wheel", (event: WheelEvent) => {
//   // check if the user has scrolled up or down
//   if (event.deltaY > 0) {
//     // the user has scrolled down - scroll to the next section
//     currentSectionIndex = Math.min(
//       currentSectionIndex + 1,
//       sections.length - 1
//     );
//     const nextSection = sections[currentSectionIndex];
//     window.scrollTo(0, nextSection.offsetTop);
//   } else {
//     // the user has scrolled up - scroll to the previous section
//     currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
//     const previousSection = sections[currentSectionIndex];
//     window.scrollTo(0, previousSection.offsetTop);
//   }
// });
