// დავალება

// ● დაწერე ფუნქცია, რომელიც მიიღებს a და b
// პარამეტრებს და დააბრუნებს ტექსტს
// “ტოლია” თუ a უდრის b-ს, ხოლო
// წინააღმდეგ შემთხვევაში, დააბრუნებს “არ
// არის ტოლი”
// ● გაითვალისწინე, რომ a და b ყოველთვის
// ერთი და იგივე ტიპის არ არის

function add(a, b) {
    const messageOne = 'ტოლია';
    const messageTwo = 'არ არის ტოლი';
    if (a === b) return messageOne;
    else return messageTwo;
}

console.log(add(8, 8));
console.log(add(5, '5'));
console.log(add(3, undefined));
console.log(add(true, 6));
console.log(add(null, 'string'));
console.log('-------------------------');


// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ტემპერატურას ფარენჰეიტებში და
// დააბრუნებს ტემპერატურას ცელსიუსში
// ● თუ პარამეტრი არ არის რიცხვითი მონაცემი
// დააბრუნე - false

function fahrenheitToCelsius(f) {
    if (typeof f === 'number'){
        const c = ((f - 32) * 5 ) / 9;
        return c;
    } else {
        return false;
    }
}

console.log(fahrenheitToCelsius(98.6));
console.log(fahrenheitToCelsius(139));
console.log(fahrenheitToCelsius('string'));
console.log(fahrenheitToCelsius(true));
console.log(fahrenheitToCelsius(null));
console.log('-------------------------');


// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს a (პირველი რიცხვი), b (მეორე
// რიცხვი) და operation (+, -, *, /) და
// დააბრუნებს ახალ მნიშვნელობას,
// რომელიც მიიღება ამ ორ რიცხვზე
// operation ცვლადში განსაზღვრული
// ოპერაციით
// ● თუ a და b არ არიან რიცხვები, ან თუ
// operation ცვლადში არის უცნობი,
// ოპერაცია დააბრუნე - false

function twoNumsAndOperation(a, b, operation) {
    if (typeof a === 'number' && typeof b === 'number' && typeof operation === 'string' && operation !== ''){
        if(operation === '+')
        return a + b;
        if(operation === '-')
        return a - b;
        if(operation === '*')
        return a * b;
        if(operation === '/')
        return a / b;
        else return false;
        // ^ ამ სთეითმენთის გარეშე სხვა სთრინგმა შეიძლება დააბრუნებინოს ფუნქციას undefined 
        // მაგალითად (7, 9, 'abc') შემთხვევაში.
    } else {
        return false;
    }
}

console.log(twoNumsAndOperation(7, 5, '+'));
console.log(twoNumsAndOperation(7, 5, '-'));
console.log(twoNumsAndOperation(7, 5, '*'));
console.log(twoNumsAndOperation(7, 5, '/'));
console.log(twoNumsAndOperation(7, 5, ''));
console.log(twoNumsAndOperation(7, null, '-'));
console.log(twoNumsAndOperation(undefined, 5, '*'));
console.log(twoNumsAndOperation(7, true, 'string'));
console.log(twoNumsAndOperation(7, 9, 'abc'));
console.log(twoNumsAndOperation('8', 4, '+'));
console.log(twoNumsAndOperation(7, 4, 9));
