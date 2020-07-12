let msg = document.querySelector(".msg");
let inputField = document.querySelector("input");
let actionBtn = document.querySelector(".actionBtn");
let play = false;
let newWords = "";
let randomWords = "";
let feedbackOpen = document.querySelector('.open');
let feedbackClose = document.querySelector('.close');

let scrambleWords = [
  "ashish",
  "puneet",
  "chotu",
  "vishnu",
  "ashu",
  "niketa",
  "nikki",
  "golu",
  "harshit",
  "yogansh",
  "tanishka",
  "bitto",
  "arya",
  "dev",
];

let createRandomWords = () => {
  let randomNum = Math.floor(Math.random() * scrambleWords.length);
  // console.log(scrambleWords[randomNum]);
  let newTempScrambleWords = scrambleWords[randomNum];
  return newTempScrambleWords;
};

let scrambledWords = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    // console.log(temp);
    let j = Math.floor(Math.random() * (i + 1));
    // console.log(i);
    // console.log(j);

    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

actionBtn.addEventListener("click", function () {
  if (!play) {
    play = true;
    actionBtn.innerHTML = "Guess";
    inputField.classList.toggle("hidden");
    newWords = createRandomWords();
    randomWords = scrambledWords(newWords.split(""));
    console.log(randomWords.join(""));
    msg.innerHTML = `Welcome, write the correct name of your family member with this wrong name <h2>${randomWords.join(
      ""
    )}</h2>`;
  } else {
    let tempoWords = inputField.value;
    console.log(tempoWords);
    if (tempoWords === newWords) {
      play = false;
      msg.innerHTML = `Very Good You are correct! It is <strong>${newWords}</strong>`;
      actionBtn.innerHTML = "Start Again";
      inputField.classList.toggle("hidden");
      inputField.value = "";    
      console.log("Correct");
    } else {
      msg.innerHTML = `Oh No, You are wrong Try Again with this word - ${randomWords.join("")}`;
      alert("This is incorrect");
      console.log("Incorrect");
    }
  }
});
