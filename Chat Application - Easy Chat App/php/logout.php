<?php
    session_start();
    if(isset($_SESSION['unique_id'])){// if user is logged in then he/she will come to this page other ways to login page
        include_once "config.php";
        $logout_id = mysqli_real_escape_string($conn, $_GET['logout_id']);
        if(isset($logout_id)){
            $status = "Offline now";
            $sql = mysqli_query($conn,"UPDATE users SET status = '{$status}' WHERE unique_id = {$logout_id}");
            if($sql){
                session_unset();
                session_destroy();
                header("location: ../login.php");
            }
        }else{
            header("location: ../user.php");    
        }
    }else{
        header("location: ../login.php");
    }
?>