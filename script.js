//your JS code here. If required.
const input = document.querySelector("#ip");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

btn.addEventListener("click", () => {
    const number = parseFloat(input.value);

    if (isNaN(number)){
        output.innerText = `Please enter a Valid number`;
        return
    }

    createPromise(number)
        .then((result) => multiply(result))
        .then((result) => substraction(result))
        .then((result) => division(result) )
        .then((result) => addition(result))
        .catch((err) => {
            output.innerText =`Error: ${err}`
        })
})


function createPromise(number){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            output.innerText = `Result:${number}`;
            resolve(number);
        },2000)
    });
}

function multiply(number){
    return new Promise((resolve) => {
        setTimeout(()=>{
            const mul = number *2;
            output.innerText =`Result:${mul}`;
            resolve(mul);
        },1000)
    })
}

function substraction(number){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            const subtract = number - 3;
            output.innerText =`Result:${subtract}`;
            resolve(subtract)
        },1000)
    })
}

function division(number){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            const division = number/2;
            output.innerText =`Result:${division}`;
            resolve(division)
        },1000)
    })
}

function addition(number){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            const addition = number + 10;
            output.innerText =`Final Result:${addition}`;
            resolve(addition)
        },1000)
    })
}
