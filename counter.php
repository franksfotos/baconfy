 <?php
    if( isset($_POST['clicks']) ) { 
        incrementClickCount();
    }

    function getClickCount()
    {
        return (int)file_get_contents("clickcount.txt");
    }

    function incrementClickCount()
    {
        $count = getClickCount() + 1;
        file_put_contents("clickcount.txt", $count);
    }
?>