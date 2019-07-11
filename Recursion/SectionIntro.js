function takeShower() {
    return "Showering!";
}

function eatBreakfast() {
    let meal = cookFood();
    return `eating ${meal}`;
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Shake", "Pasta"];
    return items[Math.floor(Math.random())*items.length];
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log("Ready to go to work!");
}

wakeUp();

//recursion has a base case
// recursion has a different input