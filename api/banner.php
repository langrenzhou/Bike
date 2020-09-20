<?php
    header('content-type:text/html;charset=utf-8');
    header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with, content-type');

    // 1. 连接数据库
    $mysqli = new Mysqli("localhost","root","root","tarocodes");

    //2. 判断数据库是否连接成功
    if($mysqli->connect_errno){
        die();
    }

    
    $sql = "select * from banner";

 
    $result=$mysqli->query($sql);
while($row=mysqli_fetch_assoc($result)){
    $data[]=$row;
}
print_r(json_encode($data));
        // $row = Mysqli_fetch_assoc($result);
        

?>