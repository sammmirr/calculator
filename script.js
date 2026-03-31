function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
  try {
    let expression = document.getElementById("display").value;
    let result = eval(expression);

    document.getElementById("display").value = result;

    let historyList = document.getElementById("history");
    let li = document.createElement("li");
    li.textContent = expression + " = " + result;
    historyList.prepend(li);

  } catch {
    document.getElementById("display").value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
