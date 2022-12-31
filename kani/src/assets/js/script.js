// function([string1, string2],target id,[color1,color2])
consoleText(["Welcome", "My name is Kanishk Vatsavayi", "Explore"], "text", [
  "#fa0505",
  "#fa0505",
  "white",
]);

function consoleText(words, id, colors) {
  // Use default colors if none are provided
  if (colors === undefined) colors = ["#fff"];

  // Get the target element and set the initial color
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);

  // Create an interval to update the text and colors
  var wordIndex = 0;
  var colorIndex = 0;
  var letterIndex = 0;
  var isWaiting = false;
  setInterval(function () {
    if (isWaiting) {
      return;
    }
    // If we have reached the end of the current word, move to the next word
    if (letterIndex === words[wordIndex].length) {
      isWaiting = true;
      // Wait one second before moving to the next word
      setTimeout(function () {
        // Remove the current word letter by letter
        var interval = setInterval(function () {
          if (letterIndex === 0) {
            clearInterval(interval);
            wordIndex = (wordIndex + 1) % words.length;
            colorIndex = (colorIndex + 1) % colors.length;
            target.setAttribute("style", "color:" + colors[colorIndex]);
            isWaiting = false;
          } else {
            letterIndex--;
            target.innerHTML = words[wordIndex].substring(0, letterIndex);
          }
        }, 50);
      }, 2000);
      return;
    }

    // Update the text with the next letter
    target.innerHTML = words[wordIndex].substring(0, letterIndex + 1);
    letterIndex++;
  }, 150);
  // Create an interval to flash the underscore
  var underscore = document.getElementById("console");
  setInterval(function () {
    if (underscore.className === "console-underscore hidden") {
      underscore.className = "console-underscore";
    } else {
      underscore.className = "console-underscore hidden";
    }
  }, 300);
}
