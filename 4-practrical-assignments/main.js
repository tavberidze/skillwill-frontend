// დავალება

// ● დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ string-
// ს
// ● არ გამოიყენო string.replace() ფუნქცია


const stringReplace = (str, valueToReplace, valueToReplaceWith) => {
    if (typeof str === 'string' && str !== '') {
        const strArray = str.split(valueToReplace);
        const resultStr = strArray.join(valueToReplaceWith);
        return resultStr;
    } else {
        return undefined;
    }
}
  
const shortExample = stringReplace('Single', 'S', 'M');
const longExample = stringReplace('Example with multi words for demonstration purposes', 'demonstration', 'showcasing');
const badExample1 = stringReplace(32 , 'Bad', 'Sad');
const badExample2 = stringReplace('' , 'Bad', 'Good');


console.log(shortExample);
console.log(longExample);
console.log(badExample1);
console.log(badExample2);
console.log('----------------------');

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას

const upperCase = string => typeof string === 'string' && string !== '' ? string.toUpperCase() : undefined;

console.log(upperCase('me var dabali asoebi'));
console.log(upperCase(`
It took so long, for me to realize
How strong your heart is
And all this time, my mind was working
In strange ways

Looking back on the days, just wanna be free
Through the love in your eyes
Now I'm staring inside, just wanna be free
Through the love in your eyes

Sweet tides, pools of love
Your eyes are full of
Sweet tides, pools of love
Your eyes are full of`));
console.log(upperCase(''));
console.log(upperCase(32));
console.log(upperCase());
console.log('----------------------');

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით
// ● მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}].
// ფუნქციამ უნდა დააბრუნოს [{name: ‘Saba’,
// age: 20}, {name: ‘Lasha’, age: 30}]
// ● შეგიძლია გამოიყენო sort() ფუნქცია

const userArr = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
    { name: 'Gio', age: 19 },
    { name: 'Dato', age: 38},
 ];

function sortByAge(arr=[]) {
    if (Array.isArray(arr)) {
        arr.sort((a, b) => a.age - b.age);
        return arr;
    } else {
        return `This function only takes arrays`
    }
  }
  

const sortedArr = sortByAge(userArr);
const emptyArr = sortByAge();
console.log(sortedArr);
console.log(emptyArr);
console.log(sortByAge(undefined));
console.log(sortByAge(34));

