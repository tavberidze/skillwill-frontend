// დავალება

// ● setTimeout ფუნქცია იყენებს callback-ს,
// დაწერეთ მისი promise-ზე დადაფუძნებული
// ალტერნატივა
// ● (მაგ: mySetTimeout(delay).then(...)

function mySetTimeout(delay) {
  return new Promise((res) => {
    setTimeout(res, delay)
  })
};

mySetTimeout(3000).then(() => {
  console.log('This works')
})

// ● გამოიყენე პირველ დავალებაში შექმნილი
// ფუნქცია, რათა განავრცო ჩვენს მიერ
// დაწერილი “Toy Shop” შემდეგი პირობის
// იმპლემენტაციით:
// ➔ სათამაშოს დამზადებას სჭირდება
// დაახლოებით 3 წამი. (დროის მითითება
// შესაძლებელი უნდა იყოს დინამიურად)
// ➔ დავამატოთ კიდევ ერთი ნაბიჯი, რომელსაც
// დავარქმევთ პირობითად, “deliverToys”,
// რომლის დაყოვნებაც 2 წამია
// (გადაეცემა დინამიურად)
// ➔ სათამაშოს გაყიდვას სჭირდება 1 წამი
// (დინამიურად)
// ● ყოველი მომდევნო ნაბიჯი უნდა
// ელოდებოდეს წინა ნაბიჯის რეზულტატს და
// შესაბამისად წყვეტდეს მოხდება თუ არა
// მისი შესრულება
// ● გამოიყენე .then().catch() და async/await
// ● სინტაქსები. (2 ვარიანტი)

// Version 01

function makeToys() {
  return new Promise((resolve, reject) => {
    mySetTimeout(3000)
      .then(() => {
        if (Math.random() > 0.1) {
          resolve("undefected");
        } else {
          reject("defected");
        }
      });
  });
}

function deliverToys(status) {
  return new Promise((resolve, reject) => {
    mySetTimeout(2000)
      .then(() => {
        if (status === "undefected") {
          resolve("Toys delivered");
        } else {
          reject("Toys not delivered");
        }
      });
  });
}

function sellToys(status) {
  return new Promise((resolve, reject) => {
    mySetTimeout(1000)
      .then(() => {
        if (status === "Toys delivered" && Math.random() > 0.5) {
          resolve("Toys sold");
        } else {
          reject("Toys not sold");
        }
      });
  });
}

makeToys()
  .then((status) => deliverToys(status))
  .then((status) => sellToys(status))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Version 02

async function makeToysA() {
  await mySetTimeout(3000);
  if (Math.random() > 0.1) {
    return "undefected";
  } else {
    throw "defected";
  }
}

async function deliverToysA(status) {
  await mySetTimeout(2000);
  if (status === "undefected") {
    return "Toys delivered";
  } else {
    throw "Toys not delivered";
  }
}

async function sellToysA(status) {
  await mySetTimeout(1000);
  if (status === "Toys delivered" && Math.random() > 0.5) {
    return "Toys sold async";
  } else {
    throw "Toys not sold async";
  }
}

async function processToys() {
  try {
    const status = await makeToysA();
    const deliveryStatus = await deliverToysA(status);
    const sellingStatus = await sellToysA(deliveryStatus);
    console.log(sellingStatus);
  } catch (err) {
    console.log(err);
  }
}

processToys();

