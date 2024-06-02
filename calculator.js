let displayValue = [];

function aclear() {
  displayValue = [];
  update();
}

function back() {
  displayValue=displayValue.slice(0,-1);
  update();
  }

function append(num) {
  displayValue.push(num);
  update();
}

function calculate() {
  try {
    const res= eval(displayValue.join(''));
    displayValue = [res.toString()];
    update();
  } catch (error) {
    displayValue = ['Error'];
    update();
  }
}

function update() {
  document.getElementById('display').innerText = displayValue.join('');
}
