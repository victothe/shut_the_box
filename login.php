#!/usr/local/bin/php
<?php
session_save_path(__DIR__ . '/sessions/');
session_name('shutTheBox');
session_start();

$incorr_submiss = false;

if (isset($_POST['pwords'])) {
    validate($_POST['pwords'], $incorr_submiss);
}

function validate($submiss, &$incorr_submiss)
{
    $file = fopen('h_password.txt', 'r') or die('Unable to find the hashed password');

    $hashed_password = fgets($file);
    $hashed_password = trim($hashed_password);

    fclose($file);

    $hashed_submiss = hash('md2', $submiss);

    if ($hashed_submiss !== $hashed_password) {
        $_SESSION['loggedin'] = false;
        $incorr_submiss = true;
    } else {
        $_SESSION['loggedin'] = true;
        header('Location: welcome.php');
        exit;
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Shut The Box</title>
</head>

<body>
    <header>
        <h1>Welcome! Ready to play "Shut The Box"?</h1>
    </header>

    <main>
        <section>
            <h2>Login</h2>
            <p>In order to play you need the password.</p>
            <p>If you know it, please enter it below and login.</p>
            <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <fieldset>
                    <label for="pwordentry"> Password:</label>
                    <input type="password" id="pwordentry" name="pwords">
                    <input type="submit" value="Login" id="submit">
                </fieldset>
            </form>

            <?php
            if ($incorr_submiss) {
                echo '<p>Invalid password!</p>';
            }
            ?>
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