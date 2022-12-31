// declare module "src/assets/ts/script";

import { ref, onBeforeMount } from "vue";
// function([string1, string2],target id,[color1,color2])
// consoleText(["Welcome", "My name is Kanishk Vatsavayi", "Explore"], "text", [
//   "#fa0505",
//   "#fa0505",
//   "white",
// ]);

export function consoleText(
  words: string[],
  id: string,
  colors: string[] = ["#fff"]
) {
  // Get the target element and set the initial color
  const target = document.getElementById(id);
  if (target) {
    target.setAttribute("style", `color:${colors[0]}`);
  }

  // Create an interval to update the text and colors
  let wordIndex = 0;
  let colorIndex = 0;
  let letterIndex = 0;
  let isWaiting = false;
  setInterval(() => {
    if (isWaiting) {
      return;
    }
    // If we have reached the end of the current word, move to the next word
    if (letterIndex === words[wordIndex].length) {
      isWaiting = true;
      // Wait one second before moving to the next word
      setTimeout(() => {
        // Remove the current word letter by letter
        const interval = setInterval(() => {
          if (letterIndex === 0) {
            clearInterval(interval);
            wordIndex = (wordIndex + 1) % words.length;
            colorIndex = (colorIndex + 1) % colors.length;
            if (target) {
              target.setAttribute("style", `color:${colors[colorIndex]}`);
            }
            isWaiting = false;
          } else {
            letterIndex--;
            if (target) {
              target.innerHTML = words[wordIndex].substring(0, letterIndex);
            }
          }
        }, 50);
      }, 2000);
      return;
    }

    // Update the text with the next letter
    if (target) {
      target.innerHTML = words[wordIndex].substring(0, letterIndex + 1);
    }
    letterIndex++;
  }, 150);

  // Create an interval to flash the underscore
  const underscore = document.getElementById("console");
  if (underscore) {
    setInterval(() => {
      if (underscore.className === "console-underscore hidden") {
        underscore.className = "console-underscore";
      } else {
        underscore.className = "console-underscore hidden";
      }
    }, 300);
  }
}

export default {
  consoleText,
};
