// Select HTML elements
const input = document.querySelector("#ip");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

// Add click event listener to the button
btn.addEventListener("click", () => {
    const number = parseFloat(input.value);

    // Check if the input is valid
    if (isNaN(number)) {
        output.textContent = "Please enter a valid number.";
        return;
    }

    // Start the promise chain
    new Promise((resolve) => {
        setTimeout(() => {
            output.textContent = `Result: ${number}`;
            resolve(number);
        }, 2000);
    })
        .then((num) => {
            // Multiply the number by 2
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = num * 2;
                    output.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then((num) => {
            // Subtract 3 from the number
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = num - 3;
                    output.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then((num) => {
            // Divide the number by 2
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = num / 2;
                    output.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then((num) => {
            // Add 10 to the number
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = num + 10;
                    output.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then((finalResult) => {
            // Update the final result
            setTimeout(() => {
                output.textContent = `Final Result: ${finalResult}`;
            }, 1000);
        })
        .catch((error) => {
            // Handle any potential errors
            output.textContent = `Error: ${error}`;
        });
});
