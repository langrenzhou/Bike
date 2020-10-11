const express =require('express')
const app=express()
const mysql=require('mysql')
const MysqlQuery=require('./Promise')
const link=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'010527',
    database:'bike'
})

link.connect()
app.all('/register',(request,response)=>{
    response.header("Access-Control-Allow-Origin", "http://192.168.43.128:10086"); //设置允许跨域的域名，*代表允许任意域名跨域
    response.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    response.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
     const {Name,Password}=request.query
     const Img='https://user-gold-cdn.xitu.io/2019/5/14/16ab62e6a6199fbc?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
     const selCheck=`select * from user where Name=${Name}`
    MysqlQuery(selCheck ,link).then((res,err)=>{
        console.log('执行了第一次')
      if(res.length){
         response.send('已被注册')
         response.end(err)
      }else{
        const insCheck=`insert into user (Name,password,Img) values (${Name},${Password},'${Img}');`
        return MysqlQuery(insCheck,link)
      }
    }).catch(err=>{
        console.log(err)
    }).then((res,err)=>{
        console.log('执行注册成功')
        response.send('注册成功')
        response.end(err)
        return
    }).catch(err=>{
        console.log(err)
    })
})

app.listen('8081',()=>{
    console.log('接口地址为:127.0.0.1:8081')
})