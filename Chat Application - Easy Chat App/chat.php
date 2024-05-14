    <?php
        session_start();
        include_once "php/config.php";
        if(!isset($_SESSION['unique_id'])){
            header('location: login.php');
        }
    ?>
    <?php include_once "header.php"; ?>
    <body>
    <div class="wrapper">
        <section class="users_Chat">
            <header>
                <?php
                include_once "php/config.php";
                $user_id = mysqli_real_escape_string($conn, $_GET['user_id']);
                $sql = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$user_id}");
                if(mysqli_num_rows( $sql) > 0){
                    $row = mysqli_fetch_assoc($sql);
                }
                ?>
                <a href="user.php" class="Back_icon"><i class="fa fa-arrow-left"></i></a>
                <img src="php/images/<?php echo $row['img']?>" alt="">
                <div class="details">
                    <span><?php echo $row['fname'] . " " . $row['lname']?></span>
                    <p><?php echo $row['status']?></p>
                </div>
            </header>
            <div class="Chat_Box">
                <div class="chat outgoing">
                    <div class="details">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="chat incoming">
                    <img src="php/images/<?php echo $row['img']?>" alt="">
                    <div class="details">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <form action="#" class="typing_area" autocapitalize="off">
                <input type="text" name="outgoing_id" value="<?php echo $_SESSION['unique_id']; ?>" hidden>
                <input type="text" name="incoming_id" value="<?php echo $user_id ?>" hidden>
                <input type="text" name="message" class="input_field" placeholder="Type a message here...">
                <button><i class="fab fa-telegram-plane"></i></button>
            </form>
        </section>
    </div>

    <script src="javascript/chat.js"></script>
    </body>
    </html>