<?php
  $type=$_GET['type'];
  $limit=$_GET['limit'];
  $page=$_GET['page'];
  header("Content-type: text/html; charset=utf-8");
    header("Access-Control-Allow-Origin:*");
     header('Access-Control-Allow-Methods:POST');
   header('Access-Control-Allow-Headers:x-requested-with, content-type');

    // 1. 连接数据库
    $mysqli = new Mysqli("localhost","root","root","tarocodes");

    //2. 判断数据库是否连接成功
    if($mysqli->connect_errno){
        die();
    }
if($page-1 > 0 ){
  $page=intval($page-1)*intval($limit);
} else{
  $page=0;
}
    $sql = "select * from commodity where type = '${type}' limit ${page},${limit}";
    $mysqli->query('set names utf8');
    $result=$mysqli->query($sql);

while($row=mysqli_fetch_assoc($result)){
    $data[]=$row;
}
print_r(json_encode($data));
?>