window.onload = function () {
    if (get_username() !== "") {
        let uname = document.getElementById('username');
        uname.value = get_username();
    }
};

const submit_btn = document.getElementById("submit");
submit_btn.addEventListener("click", check_username);

const uname_text = document.getElementById("username");
uname_text.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
        check_username();
    }
})

function check_username() {
    const text = document.getElementById("username").value;
    let errors = "";
    if (text.length < 5) {
        errors += "Username must be 5 characters or longer.\n";
    }
    if (text.length > 40) {
        errors += "Username cannot be longer than 40 characters.\n";
    }
    if (text.includes(" ")) {
        errors += "Username cannot contain spaces.\n";
    }
    if (text.includes(",")) {
        errors += "Username cannot contain commas.\n";
    }
    if (text.includes(";")) {
        errors += "Username cannot contain semicolons.\n";
    }
    if (text.includes("=")) {
        errors += "Username cannot contain =.\n";
    }
    if (text.includes("&")) {
        errors += "Username cannot contain &.\n";
    }
    let thing = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^*()-_+[]{}:'|`~<.>/?";
    let valid = true;
    for (let i = 0; i < text.length; i++) {
        if (thing.indexOf(text[i]) === -1) {
            valid = false;
        }
    }
    if (errors === "" && valid === false) {
        errors += "Username can only use characters from the following string:\nabcdefghijklmnopqrstuvwxyz\nABCDEFGHIJKLMNOPQRSTUVWXYZ\n0123456789\n!@#$%^*()-_+[]{}:'|`~<.>/?";
    }
    if (errors === "") {
        const d = new Date();
        d.setTime(d.getTime() + 1 * 3600 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = "username=" + text + "; " + expires;
        console.log("username=" + text + "; " + expires);
        window.location.href = "shut_the_box.php";
        return;
    }
    alert(errors);
}