<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="js/ksh.js"></script>
        <script src="js/test.js"></script>
        
    </head>
    <body>
        <span id="clicTest">Test</span>
        <form action="" method="post">
            <div id="kshTable">

            </div>
            <input type="submit" />
        </form>
        
        <?php 
            var_dump($_POST);
        
            $postData = $_POST; 
            
        foreach ($postData as $key => $pd) {
            var_dump($key);
            var_dump($pd);
        }
        
        
        ?>
    </body>
</html>