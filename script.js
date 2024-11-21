//your JS code here. If required.
// Select the required elements
const input = document.querySelector("#ip");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

// Add event listener to the button
btn.addEventListener("click", () => {
    // Convert input value to a number
    const number = parseFloat(input.value);

    if (isNaN(number)) {
        output.innerHTML = "Please enter a valid number.";
        return;
    }

    // Start promise chain with the user input
    createPromise(number)
        .then((result) => multiply(result))
        .then((result) => subtract(result))
        .then((result) => divide(result))
        .then((result) => add(result))
        .catch((err) => {
            // Handle errors, if any
            output.innerHTML = `Error: ${err}`;
        });
});

// Function to start the promise chain
function createPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            output.innerHTML = `Starting value: ${number}`;
            resolve(number);
        }, 2000);
    });
}

// Function to multiply the number by 2
function multiply(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number * 2;
            output.innerHTML = `After multiplication: ${result}`;
            resolve(result);
        }, 1000);
    });
}

// Function to subtract 3 from the number
function subtract(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number - 3;
            output.innerHTML = `After subtraction: ${result}`;
            resolve(result);
        }, 1000);
    });
}

// Function to divide the number by 2
function divide(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number / 2;
            output.innerHTML = `After division: ${result}`;
            resolve(result);
        }, 1000);
    });
}

// Function to add 10 to the number
function add(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number + 10;
            output.innerHTML = `Final result: ${result}`;
            resolve(result);
        }, 1000);
    });
}
