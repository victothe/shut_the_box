#!/usr/local/bin/php
<?php
session_save_path(__DIR__ . '/sessions/');
session_name('shutTheBox');
session_start();

$welcome = isset($_SESSION['loggedin']) && $_SESSION['loggedin'];

if ($welcome !== true) {
    header('Location: login.php');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Shut The Box</title>
    <script src="scores.js" defer></script>
</head>

<body>
    <header>
        <h1>Shut The Box</h1>
    </header>

    <main>
        <section>
            <h2>Scores</h2>
            <p>Well done! Here are the scores so far...</p>
            <p id="text">

            </p>
            <fieldset>
                <input type="button" value="PLAY AGAIN!!!" id="again">
            </fieldset>
            <fieldset>
                <input type="button" value="Force update / start updating" id="update">
                <input type="button" value="Stop updating" id="stop">
            </fieldset>
        </section>
    </main>

    <footer>
        <hr>
        <small>
            &copy; Victor He, 2022
        </small>
    </footer>
</body>

</html>