const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function() {
    //get random number btw 0 and 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

function getRandomNumber() {
    //math.floor rounds up the math.random to a whole number
    return Math.floor(Math.random() * colors.length);
}