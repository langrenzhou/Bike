import Axios from 'axios'
class Ajax {
     constructor(){
         
     }
     Axios_request(data,method='GET'){
         return new Promise((reslove,reject)=>{
            Axios({
                data,
                url:'https://cnodejs.org/api/v1/topics',
                method,
   
            }).then(res=>{
            
               reslove(res)
            })
         })
         
     }
}
export default Ajax