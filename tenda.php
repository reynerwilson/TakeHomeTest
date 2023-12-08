<!DOCTYPE html>
<html lang="en">

<head>
    <title>Data Masuk</title>
</head>

<body>

<center><h1>Data Yang Diterima:</h1></center>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    echo "Email: " . $email . "<br>";
    echo "Password: " . $password . "<br>";
}
?>

</body>

</html>
