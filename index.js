var head = document.querySelector("#heading");
function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src", randomDiceImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelector(".img2");
    image2.setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
        head.innerHTML = "🚩Player 1 wins";
    } else if (randomNumber2 > randomNumber1) {
        head.innerHTML = "🚩Player 2 wins";
    } else {
        head.innerHTML = "Tied";
    }
}

let [navigation] = performance.getEntriesByType("navigation");

if (navigation && navigation.type === "reload") {
    rollDice(); // ✅ Run your dice code only on refresh
} else {
    console.log(head.innerHTML) ;
}