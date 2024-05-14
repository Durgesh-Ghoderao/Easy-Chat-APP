<?php include_once "header.php"; ?>
<body>
<div class="wrapper">
    <section class="form login">
        <header>Easy Chat APP</header>
        <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
            <div class="error-text"></div>
                <div class="field input">
                    <label>Email Address</label>
                    <input type="text" name="email" placeholder="Enter your email">
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password">
                    <i class="fas fa-eye"></i>
                </div>
            <div class="field button">
                <input type="submit" value="Continue to Chat">
            </div>
        </form>
        <div class="link">Not yet signed up?<a href="index.php">signup now</a></div>
    </section>
</div>
<script src="javascript/login.js"></script>
<script src="javascript/pass-show-hide.js"></script>
</body>
</html>