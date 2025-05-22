const display = document.querySelector('#result');
const btns = document.querySelectorAll('button');

btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const value = btn.getAttribute('data-value');
    handleClick(value);
  })
})

function handleClick(val) {
  if (val === "C") {
    display.value = '';
  } else if (val === "DEL") {
    display.value = display.value.slice(0, -1);
  } else if (val === "=") {
    try {
      display.value = eval(display.value);
    } catch (err) {
      display.value = "Error";
    }
  } else {
    display.value += val;
  }
}