<html>
    <body>
    Welcome <?php echo $_POST["name"]; ?><br>
    <?php 
        $name = $email = $passw = $cpassw = $gender = "";
        $nameer = $emailer = $passwer = $cpasswer = $genderer = "";
        
        if( $_SERVER["REQUEST_METHOD"]=="POST" ){
            if(!empty($_POST["name"])) $name = $_POST["name"];
            else {echo "Name missing!"; $flag=1;}
            if(!empty($_POST["mail"])) $email = $_POST["mail"];
            else {echo "Email missing!"; $flag=1;}
            if(!empty($_POST["pass"])) $passw = $_POST["pass"];
            else {echo "Password missing!";$flag=1;}
            $cpassw = $_POST["cpass"];
            if(!empty($_POST["gender"])) $gender = $_POST["gender"];
            else {echo "Selec any gender.";$flag=1;}
        }

    ?>
    

    </body>
</html>