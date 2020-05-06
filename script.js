// container.addEventListener("click", (event) => {
//     if(event.target.classList.contains("button cola")) {
//         (total += 2.00);
//     }
//     else if (event.target.classList.contains("button peanut")) {
//         total += 3.00;
//     }
//     else if (event.target.classList.contains("button chocolate")) {
//         total += 4.00;
//     }
//     else{
//         total += 6.00;
//     }
// })
// console.log();

//#1
let container = document.querySelector(".container"); //targets area for Event Listener
let total = document.querySelector(".total"); //targets element for innerText
let currentTotal = 0; //counter for display
container.addEventListener("click",(event) => {
    if(event.target.classList.contains("button")){
    let amount = Number(event.target.getAttribute("data-amount")); //Number converts different object values to their numbers
    console.log(amount);
    currentTotal += amount;
    total.innerText = `Total: $${currentTotal.toFixed(2)}` //.toFixed() formats a number using fixed-point notation 
}
})

//#2

let form = document.querySelector(".form");
let coinContainer = document.querySelector(".coin-container");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    let amount = data.get("amount")
    let coin = data.get("coin")
    console.log(amount,coin);
    for(let i=0; i<amount;i++) {
        let coinDiv = document.createElement("div");
        coinDiv.classList.add("coin-div");
        coinDiv.innerText = coin;
        coinContainer.append(coinDiv);
    }
    form.reset();
})
coinContainer.addEventListener("click",(event)=>{
    if(event.target.classList.contains("coin-div")){
        event.target.remove();
    }
})


//#3
let lightBulb = document.querySelector(".light-bulb");
let buttons = document.querySelector(".button-container");
let button = document.querySelector(".light");
buttons.addEventListener("click", (event) => {
    if(event.target.classList.contains("on")) {
        lightBulb.classList.add("myOn");
    }
    else if (event.target.classList.contains("off")) {
        lightBulb.style.backgroundColor = "black";
    }
    else if(event.target.classList.contains("toggle")){
        lightBulb.classList.toggle("myOn");
    }
    else if(event.target.classList.contains("end")) {
        button.addEventListener("click",() =>{
            button.disabled = true;
        })
    }
})
