// დავალება

// ● მოცემულია მასივი [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის
// სახელს


const users = [{name: 'Temo', age: 25},
{name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

function findYoungest(users) {

    let youngestUser = users[0];

    users.forEach(user => {
        if (user.age < youngestUser.age) {
            youngestUser = user
        }
    });
    return youngestUser.name;
}

const youngest = findYoungest(users);

console.log(`${youngest} is the youngest user`);
console.log('-----------------------');


// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს იგივე
// მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს


function copyObject(originalObject) {

  const newObj = {};

  for (let key in originalObject) {
    if (originalObject.hasOwnProperty(key)) {
      newObj[key] = originalObject[key];
    }
  }
  return newObj;
}

const user = {
  name: 'Tavber',
  lastName: 'Idze',
  age: 25,
};

const newObj = copyObject(user);
newObj.age = 39;
console.log(user);
console.log(newObj);
console.log(`მეორე დაბრუნებული ობიექტის age შეიცვალა, ესეიგი დაკოპირდა და რეფრენსი არაა`)
console.log('-----------------------');


// ● დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს მანამ,
// სანამ არ გაგორდება, რომელიც უფრო
// ნაკლებ ცდაში გააგორებს სამიანს ის არის
// გამარჯვებული


function getRandomNum() {
  return parseInt(Math.random() * 6);
}

function dice() {

  // ეს მნიშვნელობები შიგნით შემოვიტანე, რომ ერთდროულად ბევრი დამეტესტა
  let playerAWins = false;
  let playerBWins = false;
  let triesA = 0;
  let triesB = 0;
  
  do {
    triesA++;
    const rollA = getRandomNum()
    if (rollA === 3) {
      playerAWins = true;
      console.log(`Player A wins with ${triesA} tries`);
      break;
    }
  
    triesB++;
    const rollB = getRandomNum()
    if (rollB === 3) {
      playerBWins = true;
      console.log(`Player B wins with ${triesB} tries`);
      break;
    }
  } while (!playerAWins && !playerBWins);
}

dice();
dice();
dice();
dice();
dice();

// მხოლოდ do while მეთოდით გამომივიდა
  