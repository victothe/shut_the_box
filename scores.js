const again_btn = document.getElementById("again");
again_btn.addEventListener("click", function () {
    window.location.replace('welcome.php');
});

let timeoutID = null;
printscores();

function printscores() {
    timeoutID = setTimeout(printscores, 8000);


    const request = new XMLHttpRequest();
    request.onload = function () {
        if (this.status === 200) {
            const text = document.getElementById('text');
            text.innerHTML = this.responseText.split('\n').join('<br>');
        }
    };
    request.open('GET', "scores.txt" + '?v=' + Math.random());
    request.send();

}

function stop_printing() {
    clearTimeout(timeoutID);
}

function force_print() {
    stop_printing();
    printscores();
}

const stop_btn = document.getElementById("stop");
stop_btn.addEventListener("click", stop_printing);

const update_btn = document.getElementById("update");
update_btn.addEventListener("click", force_print);