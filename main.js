const prompt = require("prompt-sync")();



let caughtFish = [];

while () {
    //display some test content to the user, and prompt for an action
    console.log ("You've gone fishing!  Try to maximize the value of your caught fish. You can fish for six hours until noon, and can catch up to a maximum of 10 lbs of fish.")

    console.log ("==========================================================");

    console.log(`The time is 6:00 a.m.  So far you've caught: ${caughtFish.length} fish, for a total of ${caughtFish.totalCaughtWeight} lbs, and valued at ${caughtFish.totalCaughtValue}. `);

    console.log ("==========================================================");

    // ## step 2D
    console.log(`You caught a ${randomFish} weighing ${fishWeight} with a value of ${fishValue}!`);


    let catchOrRelease = prompt("Would you like to [c]atch this fish, or [r]elease it?");
    if (catchOrRelease === "c") {
        caughtFish.push(fish);
    }
}




//  create 3 arrays with 10 values in each: 10 fish adjectives, 10 fish adjectives, and 10 fish types
const fishAdjectives1 = ["Slippery", "Scaly", "Luminescent", "Shiny", "Smelly", "Salty", "Slimy", "Foul-smelling", "Bottom-dwelling", "Irridescent"];
const fishAdjectives2 = ["White-bellied", "Finned", "Bony", "Silver", "Pink", "Beautiful", "Strange", "Rare", "Fresh", "Delicate"];
const fishTypes = ["Salmon", "Snapper", "Tuna", "Bass", "Trout", "Tilapia", "Cod", "Sardine", "Herring", "Haddock"];


let randomFish = randomFishGenerator();
let fishWeight = randomWeight();
let fishValue = randomValue();
let totalCaughtWeight = totalWeight();
let totalCaughtValue = totalValue();

// ##2C create the fish
const fish = {
    fish: randomFish,
    weight: fishWeight,
    value: fishValue
}









// ##2  code to generate random fish
// ##2A generate the random fish...a string with two adjectives and a fish type
function randomFishGenerator() {
    let randomAdjective1 = fishAdjectives1[Math.floor(Math.random() * fishAdjectives1.length)];
    let randomAdjective2 = fishAdjectives2[Math.floor(Math.random() * fishAdjectives2.length)];
    let randomFishType = fishTypes[Math.floor(Math.random() * fishTypes.length)];
    return `${randomAdjective1} ${randomAdjective2} ${randomFishType}`;
}



// ##2B generate the random fish weight and value
//random fish weight function here
// random weight between 0 and 10 with two decimal points
function randomWeight(min, max) {
    let weight = (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2);
    return (weight + " lbs");
}


//random fish value function here
// random value between 0 and 1,000 then divide by 100, output in dollars/cents
function randomValue(min, max) {
    let value = (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2);
    return ("$" + value);
}


//functions to calculate the sums of the caught fish weights and values
function totalWeight{
    for (let i = 0; i < caughtFish.length; i++)
        let sum = 0;
        sum = sum + caughtFish.weight[i];
    return sum;
}

function totalValue{
    for (let i = 0; i < caughtFish.length; i++) {
        let sum = 0;
        sum = sum + caughtFish.value[i];
        return sum;
    }
}

