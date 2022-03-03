const prompt = require("prompt-sync")({sigint : true});
// const chalk = require("chalk");

//  create 3 arrays with 10 values in each: 10 fish adjectives, 10 fish adjectives, and 10 fish types
let fishAdjectives1 = ["Slippery", "Scaly", "Luminescent", "Shiny", "Smelly", "Salty", "Slimy", "Foul-smelling", "Bottom-dwelling", "Irridescent"];
let fishAdjectives2 = ["White-bellied", "Finned", "Bony", "Silver", "Pink", "Beautiful", "Strange", "Rare", "Fresh", "Delicate"];
let fishTypes = ["Salmon", "Snapper", "Tuna", "Bass", "Trout", "Tilapia", "Cod", "Sardine", "Herring", "Haddock"];

// variables-------------------------------------------------------------------
let hour = 6;
let caughtFish = [];
let totalCaughtWeight = totalWeight();
let totalCaughtValue = totalValue();


console.log("");
console.log("");
console.log("You've gone fishing!  Try to maximize the value of your \ncaught fish. You can fish for six hours until noon, and \ncan catch up to a maximum of 10 lbs of fish.")
console.log("");
console.log("===============================================================");
console.log("");


while (hour < 12) {
    // variables-------------------------------------------------------------------
    let randomFish = randomFishGenerator();
    let fishWeight = randomWeight();
    let fishValue = randomValue();
    totalCaughtWeight = totalWeight();
    totalCaughtValue = totalValue();
    // fish object-----------------------------------------------------------------
    const fish = {
        fish: randomFish,
        weight: Number(fishWeight),
        value: Number(fishValue)
    }

    console.log(`The time is ${hour}:00 am.  So far you've caught: \n${caughtFish.length} fish \nTotal weight of: ${totalCaughtWeight} lbs \nValued at: $${totalCaughtValue.toFixed(2)}.`);
    console.log("");
    console.log("===============================================================");
    console.log("");
    console.log(`You caught a ${randomFish} weighing ${fishWeight} lbs \nwith a value of $${fishValue}!`);
    console.log("");
        // console.log(totalCaughtWeight + fish.weight);



    if ((totalCaughtWeight + fish.weight) > 10){
        console.log("Sorry, this fish will put you over the weight limit. \nYou'll have to let this one go. ");
        console.log("");
    }

    else if ((totalCaughtWeight + fish.weight) < 10) {
        let catchOrRelease = prompt("Would you like to [c]atch this fish, or [r]elease it? ");

        if (catchOrRelease === "c") {
            caughtFish.push(fish);
            console.log("")
;            console.log("Good choice, that was a nice one!");
            console.log("")
            console.log("===============================================================");

// ;            console.log(caughtFish);
        }
        else if (catchOrRelease === "r") {
            console.log("")
;            console.log("Good choice, that one looked terrible!");
            console.log("")
            console.log("===============================================================");

;        }

    }
    hour++;
}
console.log("");
console.log(`The time is now 12:00 pm. Time's up! `)
console.log(`You caught ${caughtFish.length} fish, for a total weight of ${totalCaughtWeight} lbs and a total value of $${totalCaughtValue.toFixed(2)}.`)
console.log("");
console.log("___________________________________________________________________________________________");







// ##2  code to generate random fish
// ##2A generate the random fish...a string with two adjectives and a fish type
function randomFishGenerator() {
    let randomAdjective1 = fishAdjectives1[Math.floor(Math.random() * fishAdjectives1.length)];
    let randomAdjective2 = fishAdjectives2[Math.floor(Math.random() * fishAdjectives2.length)];
    let randomFishType = fishTypes[Math.floor(Math.random() * fishTypes.length)];
    return `${randomAdjective1} ${randomAdjective2} ${randomFishType}`;
}

// ##2B generate the random fish weight and value
function randomWeight(min, max) {
    let weight = (Math.floor(Math.random() * (4.00 - 1.00 + 1.00) + 1.00).toFixed(2));
    return weight;
}

function randomValue(min, max) {
    let value = (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2);
    return value;
}

//functions to calculate the sums of the caught fish weights and values
function totalWeight() {
    let sum = 0;
    for (let i = 0; i < caughtFish.length; i++)
        sum = sum + caughtFish[i].weight;
    return sum;
}

function totalValue() {
    let sum = 0;
    for (let i = 0; i < caughtFish.length; i++) {
        sum = sum + caughtFish[i].value;
    }
    return sum;
}

