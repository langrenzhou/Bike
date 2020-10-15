import Axios from 'axios'
import qs from 'qs'
class Ajax {
     constructor(){
         
     }
     Axios_request(url,data={},method='GET'){
       
         return new Promise((reslove,reject)=>{
            Axios({
               data:qs.stringify(data),
                url:'http://127.0.0.1:8081'+url,
                method
            }).then(res=>{  
               reslove(res)
            }).catch(()=>{
                reject()
            })
         })
         
     }
}
// function Ajax(data,method='GET',index){
// const urlsArr=['接口地址1','接口地址2']
//     return new Promise((reslove,reject)=>{
//                     Axios({
//                         data,
//                         url:urlsArr[index],
//                         method,
           
//                     }).then(res=>{
//                        reslove(res)
//                     })
//                  })
// }
export default new Ajax()