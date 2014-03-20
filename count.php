<?php

$datei="counter.txt";
  
$input = $_POST['val'];
if($input == -1) {

  if(file_exists($datei)){
      // Falls die Datei existiert, wird sie ausgelesen und
      // der dort enthaltene Wert um Eins erhöht.
      $fp=fopen($datei,"r+");
      $zahl=fgets($fp);
      fclose($fp);
  } else {
      // Die Datei counter.txt existiert nicht, sie wird
      // neu angelegt und mit dem Wert 1 gefüllt.
      $fp=fopen($datei,"w");
      $zahl="0";
      fputs($fp,$zahl);
      fclose($fp);
    }
    echo $zahl;
} else {
    if(file_exists($datei)){
    $fp=fopen($datei,"r+");
    $zahl=fgets($fp);
    $zahl++;
    rewind($fp);
    flock($fp,2);
    fputs($fp,$zahl);
    flock($fp,3);
    fclose($fp);
  } else {
    $fp=fopen($datei,"w");
    $zahl="1";
    fputs($fp,$zahl);
    fclose($fp);
  }
  echo $zahl;
}

?>
