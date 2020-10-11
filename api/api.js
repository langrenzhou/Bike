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
app.all('/register',(req,res)=>{
    
    res.header("Access-Control-Allow-Origin", "http://192.168.43.128:10086"); //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
     const {Name,Password}=req.query
     const Img='https://user-gold-cdn.xitu.io/2019/5/14/16ab62e6a6199fbc?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
     const selCheck=`select * from user where Name=${Name}`
    // MysqlQuery(selCheck ,link).then((res,err)=>{
    //     console.log('执行了第一次')
    //   if(res.length){
    //     response.send({status:  200,data:'已被注册' });
    //      response.end(err)
    //   }else{
    //     const insCheck=`insert into user (Name,password,Img) values (${Name},${Password},'${Img}');`
    //     return MysqlQuery(insCheck,link)
    //   }
    // }).catch(err=>{
    //     console.log(err)
    // }).then((res,err)=>{
    //     console.log('执行注册成功')
    //     response.send({status:  200,data:'注册成功' });                   //执行这段代码报错   Cannot set headers after they are sent to the client
    //     response.end(err)
    //     return
    // }).catch(err=>{
    //     console.log(err)
    // })
    link.query(selCheck, function (err, result) {
        if (result.length) {
            res.send("注册成功请进行登录")
            res.end(err)
        } else {
            const insCheck=`insert into user (Name,password,Img) values (${Name},${Password},'${Img}');`
                    link.query(insCheck, function (err, result) {
                        if (err) {
                         
                        } else {
                            console.log('执行第二次')
                            res.send('注册成功')
                            res.end(err)
                        }
                    })
             
        }

    })
})
app.all('/Logins',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "http://192.168.43.128:10086"); //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    const {Name,Password}=req.query
    const check=`select Name from user where Password=${Password} `
    link.query(check,function(err,result){
        if(err){
            console.log(err)
        }else{
            console.log('执行第一次query')
            if(result.length){
                if(result[0].Name == Name){
                    const check=`select * from user where Name = ${Name}`
                     link.query(check,function(err ,result){
                          res.send(result)
                          res.end(err)
                     })
                }else{
                    res.send('错误')
                    res.end(err)
                }
               
            }else{
               res.send('没有记录')
               res.end(err)
            }
        }
    })
})

app.listen('8081',()=>{
    console.log('接口地址为:127.0.0.1:8081')
})