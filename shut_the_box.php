#!/usr/local/bin/php
<?php
session_save_path(__DIR__ . '/sessions/');
session_name('shutTheBox');
session_start();

$welcome = isset($_SESSION['loggedin']) && $_SESSION['loggedin'];

if ($welcome !== true) {
    header('Location: login.php');
}

if (!isset($_COOKIE['username'])) {
    header('Location: welcome.php');
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Shut The Box</title>
    <script src="username.js" defer></script>
    <script src="shut_the_box.js" defer></script>
</head>

<body>
    <header>
        <h1>Shut The Box</h1>
    </header>

    <main>
        <section>
            <h2>The Rules</h2>
            <ol type="i">
                <li>Each turn, you roll the dice/die and select 1 or more boxes which sum to the value of your roll.</li>
                <li>You will not be allowed to pick the boxes which you choose on subsequent turns.</li>
                <li>When the sum of the boxes which are left is less than or equal to 6, you will only roll a single die.</li>
                <li>When you cannot make a move or give up, the sum of the remaining boxes is your score.</li>
                <li>Lower scores are better and a score of 0 is called "shutting the box".</li>
            </ol>
        </section>

        <section>
            <h2>Dice roll</h2>
            <fieldset>
                <input id="roll" type="button" value="Roll dice">
                <span id="result">Result: </span>
            </fieldset>
        </section>

        <section>
            <h2>Box selection</h2>
            <table>
                <tr>
                    <?php
                    $count = 10;
                    for ($i = 1; $i < $count; $i++) {
                        echo "<td>$i</td>";
                    }
                    ?>
                </tr>
                <tr>
                    <?php
                    $count = 10;
                    for ($i = 1; $i < $count; $i++) {
                        echo "<td><input id='xbx$i' type='checkbox'></td>";
                    }
                    ?>
                </tr>
            </table>
            <fieldset>
                <input id="submit" type="button" value="Submit box selection">
                <input id="giveup" type="button" value="I give up / I can't make a valid move">
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