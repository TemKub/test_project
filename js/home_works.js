const gmailInput = document.querySelector("#gmail_input");
const clickGmail = document.querySelector("#gmail_button");

clickGmail.addEventListener("click", () => {
    const gmail = gmailInput.value;
    const regex10 = /^[a-zA-Z0-9]+@gmail\.com$/

    console.log(regex10.test(gmail));
});


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


const child = document.querySelector(".child_block");
let position = 0;

function moveBlock () {
    position = position + 10;
    child.style.left = `${position}px`;
    if (position < 450) {
        setTimeout(moveBlock, 100);
    }
}
moveBlock();



