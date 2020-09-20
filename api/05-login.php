<?php
    header('content-type:text/html;charset=utf-8');
    // 1. 连接数据库
    $mysqli = new Mysqli("localhost","root","root","");

    //2. 判断数据库是否连接成功
    if($mysqli->connect_errno){
        die();
    }

    //3. sql
    // $sql = "select password from login where name='lisi'";
    $sql = "select password from login where name='{$username}'";

    //4. 执行sql返回结果
    $result = $mysqli->query($sql);



    //有两种结果  一种是查询到了 一种是没有查询到
    //根据用户名查询密码的时候 密码的结果要么是0条要么是1条
    //判断$result 结果的行数
    // print_r($result);
    if(Mysqli_num_rows($result)){

        $row = Mysqli_fetch_assoc($result);
        $pwd = $row["password"];
        if($pwd === $password){
            echo "登录成功";
        }else{
            echo "密码错误";
        }

    }else{
        echo "用户名不存在";
    }

?>