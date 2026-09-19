const max = prompt("Enter the maximum number");
console.log(max);

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {

    if (guess == "quit") {
        console.log("User Quit");
        break;
    }

    if (guess == random) {
        console.log("You are right! Congrats! Random number was", random);
        break;
    }

    else if (guess < random) {
        guess = prompt("Your guess is too small. Please enter a larger number");
    }

    else {
        guess = prompt("Your guess is too large. Please enter a smaller number");
    }
}