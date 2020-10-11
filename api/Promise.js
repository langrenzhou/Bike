const  MysqlQuery=function(check,link){
        return new Promise((reslove,reject)=>{
            link.query(check,function(err,result){
                if(err){
                      reject(err)
                }else{
                    reslove(result,err)
                }
            })
        })
        
    }
module.exports = MysqlQuery