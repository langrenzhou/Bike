const express =require('express')
const app=express()
const mysql=require('mysql')
const MysqlQuery=require('./Promise')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const link=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'010527',
    database:'bike'
})

link.connect()
// 用户注册的接口
app.all('/register',(req,res)=>{
    
    res.header("Access-Control-Allow-Origin", "http://192.168.43.128:10086"); //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
     const {Name,Password}=req.query
     const Img='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAMAAAAgsQpJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwAdEr+crtuABfTnao8pUMpddzJFO9SD9HUAAAFqSURBVDjLjVVbAoMgDBN5CfhC5P5XXYtuDilivyaEpg0p67oiJufnvmvF4FTEkOEZ52z8xrLVYb1EhJEjT1BXpV1gVzmsbxoN/PYVoIC9cTg/GJ6aSdycsw3Ab8juIYXIKlY0+V4kWGO0BNDfEgI5aDWVQJBmbS9BqPK4BhVeAR0JhKZDCRQFbiX0xbWN6EXd5WWWUJJTJvBEkbCmCpcoQh9G1AjNmIHyzpKvMrCaLuXB5awgtI8aiMvWN3K0514zuJmycxWLo2yWnR9jpK7ljM38NtHucqiO4WVe/ohLFjoul/bsxQ2Ev4yi/pysUKO8auR0TqbxOcm6jsta1Lmn1ySqXEfobWQZ7HhsrP535CZNgoprMdFEPt95ep/eQBP+LtUIuvKQuMLXdVGyqhZBnS0y8yQZFmAPgCwMW+SMeE2MGslyQjXOLm/9A8yI8Y0KT1MtiLa6Eei5NLsvApTc3iDTePauRa1hOD/vACHPGH6amQAAAABJRU5ErkJggg=='
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
// 登录的接口
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
// 获取首页轮播图路径的接口
app.get('/banner',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "http://192.168.43.128:10086");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    const check=`select * from banner limit 0,5`
    link.query(check,function(err,result){
        if(err){
            console.log(err)
        }else{
            res.send(result)
            res.end(err)
        }
    })
})
// 商品列表页面的接口
app.all('/commodity',(req,res)=>{
   
    res.header("Access-Control-Allow-Origin", "http://192.168.43.128:10086");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
   
    const {type} =req.query;
    const check=`select * from commodity where type='${type}'`
    link.query(check,function(err,result){
        if(err){
            console.log(err)
        }else{
            
            res.send(result)
            res.end(err)
        }
    })
})
// 商品详情页面的接口
app.all('/commodityDetails',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "http://192.168.43.128:10086");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    const {id} =req.query;
    const check=`select * from commodity where id='${id}'`
    link.query(check,function(err,result){
        if(err){
            console.log(err)
        }else{
            
            res.send(result)
            res.end(err)
        }
    })
})
// 用户加入购物车操作的接口
app.all('/shoppingcar',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "http://192.168.43.128:10086");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    const {id} =req.query;
    const commodity=JSON.parse(JSON.stringify(req.body))
    console.log(commodity)
    const check=`insert into shoppingcar (commodityName,commodityprice,commodityId,Number,commodityText,Userid) value ('${commodity.name}',${commodity.price},${commodity.Id},1,'${commodity.Introduction}',${commodity.userid})`
    console.log(check)
     link.query(check,function(err,result){
         if(err){
            console.log(err)
         }else{
             if(result.affectedRows == 1){
                res.send({data:"success"})
             }else{
                 res.send({data:"error"})
             }
            
         }
         
     })
})
app.listen('8081',()=>{
    console.log('接口地址为:127.0.0.1:8081')
})