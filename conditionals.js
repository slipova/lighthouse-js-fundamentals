/*
//Ready for rain

const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure to bring a scarf!");
}

if (!raining) {
  console.log("Leave your umbrella at home!")
}

console.log("Now you're ready to go outside!");
*/


//What to wear

const temperature = -51;

if (temperature > -40) {
  switch (true) {
    case (temperature < 0):
      console.log("Make sure you pick out a scarf!");
      break;
    case (temperature < 15):
      console.log("Short sleeves won't cut it!");
      break;
    case (temperature > 15):
      console.log("Short sleeves are fine.");
      break;
  }
  console.log("Now you are ready to go outside");
}
if (temperature < - 40) {
  console.log("Maybe going outside is not a great idea...")
}

//Voting age

const isCitizen = false;
const age = 26;

if (isCitizen && age >= 18) {
  console.log("You are eligible to vote.")
}

