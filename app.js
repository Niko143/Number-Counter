//set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("increase10")) {
      count = count + 10;
    } else if (styles.contains("decrease10")) {
      count = count - 10;
    } else if (styles.contains("decrease100")) {
      count = count - 100;
    } else if (styles.contains("increase100")) {
      count = count + 100;
    } else if (styles.contains("increase1000")) {
      count = count + 1000;
    } else if (styles.contains("decrease1000")) {
      count = count - 1000;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
