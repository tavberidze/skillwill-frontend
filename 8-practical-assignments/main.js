// დავალება

// ● დაწერე ფუნქცია expo, რომელიც იქნება
// რეკურსიული ფუნქცია და მიიღებს
// არგუმენტად:
// ● ა) ციფრს ბ) ხარისხს და გ) callback - ს და
// დააბრუნებს მიღებული ციფრის ხარისხს
// მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 * 5)

function expo(number, power, callback) {
    if (power === 0) {
      return callback(1);
    } else {
      return callback(number * expo(number, power - 1, callback));
    }
}
  
const exampleOne = expo(5, 3, (result) => result);
const exampleTwo = expo(3, 3, (result) => result);
console.log(exampleOne);  // 125
console.log(exampleTwo);  // 27




// ● fetch ფუნქციის გამოყენებით წამოიღე
// მონაცემები მოცემული მისამართიდან და
// გამოიტანე DOM-ში პოსტის სახით

document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts");
  
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        data.forEach(post => {
          const postElement = document.createElement("div");
          postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <hr>
          `;
          postsContainer.appendChild(postElement);
        });
      })
      .catch(error => console.error("Error fetching data: ", error));
  });



// ● დაწერე ასინქრონული ფუნქცია, რომელიც
// არგუმენტად იღებს ობიექტს და აკეთებს
// deep copy-ს
// ● ფუნქციამ უნდა გამოიძახოს reject თუ
// არგუმენტი არ არის ობიექტი. თუ ყველაფერი
// კარგად არის, გამოიძახოს resolve
// კოპირებული ობიექტით

const complexObject = {
    name: "John Doe",
    age: 30,
    address: {
      city: "New York",
      zip: "10001",
    },
    hobbies: ["hiking", "reading", "painting"],
    education: {
      degree: "Bachelor's",
      major: "Computer Science",
      classes: [
        { name: "Data Structures", code: "CS101" },
        { name: "Algorithms", code: "CS201" },
      ],
    },
  };

const deepCopyAsync = (obj) => {
    return new Promise((resolve, reject) => {
      if (typeof obj !== "object" || obj === null) {
        reject("Argument is not an object.");
      } else {
        try {
          const deepCopy = JSON.parse(JSON.stringify(obj));
          resolve(deepCopy);
        } catch (error) {
          reject(error);
        }
      }
    });
};
  
deepCopyAsync(complexObject)
    .then((deepCopy) => console.log(deepCopy))
    .catch((error) => console.error("Error: ", error));