//დავალება

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე
// ელემენტი - მესამე ელემენტიდან
// დაწყებული ყველა დანარჩენის ნამრავლი

function sumProduct(...numbers) {
    if (numbers.length < 3) {
      return "Function needs at least 3 numbers";
    }
    const sum = numbers[0] + numbers[1];
    const product = numbers.slice(2).reduce((acc, num) => acc * num, 1);
    return [sum, product];
}
  
const result = sumProduct(2, 2, 4, 5, 10);

console.log(sumProduct(1, 2)); // არასაკმარისი რიცხვის შემთხვევაში
console.log(sumProduct(2, 4, 3)); // 3 რიცხვის შემთხვევაში
console.log(result); 
console.log('-----------------------------');


// ● დავუშვათ გვინდა ობიექტიდან
// წავიკითხოთ შემდეგი ველი:
// user.banks[2].address.city. დაწერე ფუნქცია,
// რომელიც პარამეტრად მიიღებს user
// ობიექტს და დააბრუნებს city-ს. გამოიყენე
// destructuring-ი. თუ ასეთი ველი არ
// არსებობს უნდა დაბრუნდეს undefined


const user = {
    banks: [
      { address: { city: 'London' } },
      { address: { city: 'Milan' } },
      { address: { city: 'Madrid' } },
    ]
  };

function findCity(user = {}) {
    const { banks } = user;
    if (banks && Array.isArray(banks) && banks[2] && banks[2].address) {
      const { city } = banks[2].address;
      return city;
    }
}

const city = findCity(user);
console.log(city); 
console.log(findCity()); // თუ არ მოიძებნა ასეთი ველი დიფოლტი იქნება undefined
console.log('-----------------------------');



// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს
// ● გაითვალისწინე, რომ თუ ობიექტში კიდევ
// სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას
// ● გამოიყენეთ (...) ოპერატორი

const artistObj = {
    title: 'The Richest Man In Babylon',
    artist: 'Thievery Corporation',
    duration: {
        length:{
            minutes: 3,
            seconds: 50,
        },
    },
    releaseDate: 'January 14, 2003',
    style: ['Downtempo', 'Bossa', 'Acid Jazz Electronica'],
    inStock: true,
}

function copyObject(originalObject) {
    const newObj = { ...originalObject };
    return newObj;
}


const newObj = copyObject(artistObj);

newObj.inStock = false;
newObj.title = `Heaven's Gonna Burn Your Eyes`; // შეიცვალა title da inStock ფილდები ე.ი დაკოპირდა
console.log(artistObj);
console.log(newObj);

