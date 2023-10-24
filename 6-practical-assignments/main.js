// დავალება

// ● შექმენი button, რომელზე დაწკაპების
// შემდეგაც გაიხსნება მოდალი და მოდალის
// უკან შავი/გამჭვირვალე background

const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay');
const modalBtn = document.getElementById('modal-btn');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});

window.addEventListener('click', (e) => {
  if (e.target == overlay) {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }
})

// ● შექმენი input და button
// ● input-ში მომხმარებელი ჩაწერს ფერს და
// button ღილაკზე დაწკაპების შემდეგ body-ს
// background შეიცვლება ჩაწერილ ფერად
// ● (ფერები რომლის ჩაწერაც შეუძლია: red,
// blue, green, black, white)
// ● თუ სხვა ფერი ჩაწერა, გამოუტანე
// შეტყობინება alert-ის საშუალებით

const colorsArr = ['red', 'blue', 'green', 'black', 'white'];

const colorPickerInput = document.getElementById('color-picker-input');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
  const color = colorPickerInput.value.toLowerCase();

  if (colorsArr.includes(color)) {
    document.body.style.backgroundColor = color;
  } else {
    alert('Please choose from available colors only: red, blue, green, black, white')
  }
});

colorPickerInput.addEventListener('mouseover', function () {
  tooltip.style.display = 'block';
});

colorPickerInput.addEventListener('mouseout', function () {
  tooltip.style.display = 'none';
});

// ● შექმენი input, სადაც მომხმარებელს
// შესაძლებლობა ექნება შეიტანოს “:”- ით
// ერთმანეთისგან გამოყოფილი რიცხვები,
// average ღილაკზე დაწკაპების შემდეგ
// დაითვალე ამ რიცხვების საშუალო და
// გამოუტანე ეკრანზე
// ● მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს

const averageNumInput = document.getElementById('average-num-input');
const averageBtn = document.getElementById('average-btn');
const result = document.getElementById('result');

averageBtn.addEventListener('click', () => {
  if(typeof averageNumInput.value === 'number') {
    const inputNumbers = averageNumInput.value.split(':');
    const numbers = inputNumbers.map(num => parseInt(num));
  
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
  
    result.innerText = `The averge of this numbers is equal to:  ${average}`
    result.style.display = 'block';
  } else {
    alert('Only numbers are allowed');
  }
});















