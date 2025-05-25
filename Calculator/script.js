const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Handling button clicks
buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (item.id === "equal") {
      if (display.innerText !== "") {
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
          setTimeout(() => (display.innerText = ""), 2000);
        }
      } else {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else {
      let inputValue = item.innerText;

      // Ensure valid formatting for multiplication and division
      if (inputValue === "×") inputValue = "*";
      if (inputValue === "÷") inputValue = "/";

      display.innerText += inputValue;
    }
  };
});


// Snowflake Effect (Remains)
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 20; i++) { 
    let snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    document.body.appendChild(snowflake);
  }
});

// Handle keyboard input
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    display.innerText += key;
  } else if (key === "Enter") {
    if (display.innerText !== "") {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    }
  } else if (key === "Backspace") {
    display.innerText = display.innerText.slice(0, -1);
  } else if (key === "Escape") {
    display.innerText = "";
  }
});
