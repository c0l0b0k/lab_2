<?php

$id = $_GET['id'];


$connect = mysqli_connect('localhost', 'root', '', 'pelmeni');
if ($connect === false)
{
    die("ошибка поключения к бд");
}

$sql = "DELETE FROM card WHERE id={$id}";

$result = mysqli_query($connect, $sql);

header('Location: http://localhost:1234');
exit;

?>