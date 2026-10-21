// Домашнее задание 1го урока
const gmailInput = document.querySelector("#gmail_input");
const clickGmail = document.querySelector("#gmail_button");
const gmailResult2 = document.querySelector("#gmail_result2");

clickGmail.addEventListener("click", () => {
    const gmail = gmailInput.value;
    const regex10 = /^[a-zA-Z0-9]+@gmail\.com$/

    if (regex10.test(gmail)) {
        gmailResult2.textContent = gmail;
    } else {
        gmailResult2.textContent = "Неверный Gmail-адрес";
    }});
gmailResult2.style.color = "orange";


// Домашнее задание 1-2го урока в доработанном виде
const child = document.querySelector(".child_block");

let x = 0;
let y = 0;
let direction = 1;

function moveBlock () {
    if (direction === 1) {
        x = x + 10;

        if (x >= 450) {
            direction = 2;
        }
    }
    else if (direction === 2) {
        y = y + 10;
        if (y >= 450) {
            direction = 3;
        }
    }
    else if (direction === 3) {
        x = x - 10;
        if (x <= 0) {
            direction = 4;
        }
    }
    else if (direction === 4) {
        y = y - 10;
        if (y <= 0) {
            direction = 1;
        }
    }
    child.style.left = `${x}px`;
    child.style.top = `${y}px`;

        setTimeout(moveBlock, 10);
}
moveBlock();



// Второе задание 2го урока

const seconds = document.querySelector("#seconds");

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let count = 0;
let timer = null;

start.addEventListener("click", () => {
    if (timer === null) {
        timer = setInterval(() => {
            count = count + 1;
            seconds.textContent = count;

        }, 1000);
    }
});

stop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

reset.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    count = 0;
    seconds.textContent = count;
});


