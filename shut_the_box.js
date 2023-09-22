let unchecked_total = 45; // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9

let dice_roll = null;
// const dice_result;

const roll_dice_btn = document.getElementById("roll");
const submit_btn = document.getElementById("submit");
const finish_btn = document.getElementById("giveup");

// const boxes;
const checkboxes = document.getElementsByTagName("input");

// Add 12 event listeners.
for (let i = 0; i < 9; i++) {
    document.getElementsByTagName("td")[i].addEventListener("click", function () {
        if (checkboxes[i + 1].disabled) {
            return;
        }
        if (checkboxes[i + 1].checked === false) {
            checkboxes[i + 1].checked = true;
        }
        else {
            checkboxes[i + 1].checked = false;
        }
    });

}
roll_dice_btn.addEventListener("click", roll_dice);
submit_btn.addEventListener("click", submit);
finish_btn.addEventListener("click", finish);

function roll_dice() {
    // Roll dice, inject text, disable / enable buttons.
    let dice1 = (Math.floor(1 + 6 * Math.random()));
    let dice2 = (Math.floor(1 + 6 * Math.random()));
    dice_roll = dice1 + dice2;
    let out = (dice1 + ' + ' + dice2 + ' = ' + dice_roll);

    let result = document.getElementById('result');
    result.innerHTML = `Result: ${out}`
    document.getElementById("roll").disabled = true;
    document.getElementById("submit").disabled = false;
}

function roll_die() {
    // Roll single die, inject text, disable / enable buttons.
    let dice = (Math.floor(1 + 6 * Math.random()));
    dice_roll = dice;
    let result = document.getElementById('result');
    result.innerHTML = `Result: ${dice}`
    document.getElementById("roll").disabled = true;
    document.getElementById("submit").disabled = false;
}


function sum_checked_values() {
    let checkedtot = 0;
    for (let i = 1; i < 10; i++) {
        if (document.getElementsByTagName("input")[i].checked && document.getElementsByTagName("input")[i].disabled != true) {
            checkedtot += i;
        }
    }
    return checkedtot;
}

function submit() {
    // Deal with invalid submission.
    if (sum_checked_values() !== dice_roll) {
        alert("invalid move. try again");
        return;
    }
    // Deal with valid submission...
    for (let i = 1; i < 10; i++) {
        if (document.getElementsByTagName("input")[i].checked) {
            document.getElementsByTagName("input")[i].checked = false;
            document.getElementsByTagName("input")[i].disabled = true;
        }
    }
    unchecked_total -= dice_roll;
    // Delete text, disable / enable buttons and checkboxes.
    let result = document.getElementById('result');
    result.innerHTML = "Result:";
    document.getElementById("submit").disabled = true;
    document.getElementById("roll").disabled = false;
    // Change to rolling one die if appropriate.
    if (unchecked_total <= 6) {
        roll_dice_btn.addEventListener("click", roll_die);
    }
}

function finish() {
    for (let i = 0; i < 12; i++) {
        document.getElementsByTagName("input")[i].disabled = true;
    }
    alert(`Your score is ${unchecked_total}`);

    let username = get_username();
    const request = new XMLHttpRequest();

    request.onload = function () {
        if (this.status === 200) {
            window.location.replace('scores.php');
        }
    };

    request.open('POST', 'score.php');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(`username=${username}&score=${unchecked_total}`);

}

window.onload = function () {
    document.getElementById("submit").disabled = true;
};