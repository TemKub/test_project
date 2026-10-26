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

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Первое задание третьего урока.

function delay(value, ms, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            shouldFail
                ? reject(new Error(`Ошибка при обработке: ${value}`))
                : resolve(value);
        }, ms);
    });
}

delay(1, 500, false)
    .then((result) => {
        console.log(result);
        return delay (result + 1, 500, true)
    })
    .then((result) => {
        console.log(result);
        return delay (result + 1, 500, false)
    })
    .then((result) => {
        console.log(result);
        return (result)
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Работа завершена")
    })


///////////////////////////////////////////////////////////////

async function checkNumbers() {
    try {
        const first = await delay(1, 500, false)
        console.log(first);

        const second = await delay(first + 1, 500, true)
        console.log(second);

        const third = await delay(second + 1, 500, false)
        console.log(third);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Завершено")
    }
};
checkNumbers();

////////////////////////////////////////////////////////////////

async function checkArray() {
    const numbers = [10, 20, 30, 40];
    const results = [];

    for (let number of numbers) {
        try {
            const fail = Math.random() > 0.7;

            const result = await delay(number, 500, fail)
             results.push({
                 value: result,
                 error: null,
             });
        } catch (error) {
            results.push({
                value: number,
                error: error.message,
            });
        }
    }
    console.log(results);
}
checkArray();

/////////////////////////////////////////////////////////////////

async function cookFood() {
    const pizza = delay("Pizza", 1000, false);
    const sushi = delay("Sushi", 2000, false);
    const burger = delay("Burger", 500, true);
    const ramen = delay("ramen", 3000, false);

    try {
        const result = await Promise.all([
            pizza,
            sushi,
            burger,
            ramen
        ]);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
cookFood();

/////////////////////////////////////////////////////////////////

async function cookFoodSettled() {
    const pizza = delay("Pizza", 1000, false);
    const sushi = delay("Sushi", 2000, false);
    const burger = delay("Burger", 500, true);
    const ramen = delay("ramen", 3000, false);

    try {
        const result = await Promise.allSettled([
            pizza,
            sushi,
            burger,
            ramen
        ]);
        const succeeded = result.filter((item) => {
            return item.status === "fulfilled";
        });

        const failed = result.filter((item) => {
            return item.status === "rejected";
        });

        console.log("Успешные", succeeded);
        console.log("Ошибки", failed);
    } catch (error) {
        console.log(error.message);
    }
}
cookFoodSettled();


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Домашнее задание 4го урока

async function getCharacters () {
    try {
        const response = await fetch("../data/characters.json");
        const characters = await response.json();
        const container = document.querySelector("#characters");

        characters.forEach((character) => {
            const card = document.createElement("div");
            card.classList.add("character_card");

            card.innerHTML = `
                <h2>${character.name}</h2>
                <p>age:${character.age}</p>
                <img src="${character.photo}" alt="${character.name}" />
            `
            container.append(card);
        });
    } catch (error) {
        console.log(error.message);
    }
}
getCharacters();

/////////////////////////////

async function getBio() {
    try {
        const response2 = await fetch("../data/bio.json");
        const bio = await response2.json();
        console.log(bio);
    } catch (error) {
        console.log(error.message);
    }
}
getBio();