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

/////////////////////////////

async function getConverter() {
    try {
        const response3 = await fetch("../data/converter.json");
        const converter = await response3.json();
        const inputSom = document.querySelector("#som");
        const inputUsd = document.querySelector("#usd");
        const inputEur = document.querySelector("#eur");

        console.log(converter.usd);
        console.log(converter.eur);

        const convert = (element, otherElement, thirdElement) => {
            element.oninput = () => {
                const som = Number(element.value);
                if (element.value === "") {
                    otherElement.value = "";
                    thirdElement.value = "";
                    return;
                }
                const usd = som / converter.usd;
                const eur = som / converter.eur;

                otherElement.value = usd.toFixed(2);
                thirdElement.value = eur.toFixed(2);
            };
        };
        convert(inputSom, inputUsd, inputEur);
    } catch (error) {
        console.log(error.message);
    }
}
getConverter();

/////////////////////////////

const btn_prev = document.querySelector("#btn-prev");
const btn_next = document.querySelector("#btn-next");
const card = document.querySelector(".card");

let currentCard = 0;
const totalCard = 200;

btn_prev.addEventListener("click", () => {
    currentCard = (currentCard - 1 + totalCard) % totalCard;
    card.textContent = currentCard;
    console.log(currentCard);
});

btn_next.addEventListener("click", () => {
    currentCard = (currentCard + 1) % totalCard;
    card.textContent = currentCard;
    console.log(currentCard);
})


