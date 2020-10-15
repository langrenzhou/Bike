import Taro, { Component } from '@tarojs/taro'
import { View, Input, Image } from '@tarojs/components'
import './index.css'
import store from '../../store/index'
import {UserCookieLogins,UserLogin} from '../../store/action'
class HeadeSearch extends Component {
    componentWillMount(){

      const cookie=document.cookie
      if(cookie != ''){
          const cookieArr=cookie.split(";")
          const Name=cookieArr[0].split("=")
          const Img=cookieArr[1].split("=")
     
          const UserCookieLoginaction = UserCookieLogins({
          Name:Name[0] == 'userName'? Name[1] : Img[1],
         Img :Img[0]  == 'userImg' ? Img[1] : Name[1]
        })
          const UserLoginaction = UserLogin(true)
          store.dispatch(UserLoginaction)
          store.dispatch(UserCookieLoginaction)
      }
    }
    constructor(props) {
        super(props)
        this.state = {
        
        }
        this.state=store.getState()
        store.subscribe(this.changeState.bind(this))
    }
    changeState() {
        this.setState(store.getState())
       
    }
    render() {   
        return (
            <View className='big'>
                <View className='area'>
                    <View className='Type' onClick={()=>{Taro.switchTab({url:"/pages/Types/index"})}}>
                        <Image
                            style='width:.2rem;height:.2rem;'
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgAgMAAAAdw9KTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwDjSYAlncUAAAAbSURBVBjTY5j/Hwq+MdTDmH+RmUgK6AuGhcsAU5tyB6Ji+x0AAAAASUVORK5CYII'></Image>
                    </View>
                    <View className='left'>


                        {/* <Input placeholder='请输入商品'></Input> */}
                    </View>
                    <View className='right'
                       onClick={this.Login.bind(this)}
                        style={
                            this.state.Login ? 'font-size:0' : 'font-size:0.2rem'
                        }
                    >
                        {this.state.Login ? <Image
                           className='HeadImg'
                            src={this.state.UserInfo.Img}>
                     </Image> : '登录'}

                    </View>
                </View>
            </View>
        )
    }
    Login(e){
        let url=''
      if(this.state.Login){
          url='/pages/My/index'
      }else{
        url='/pages/Logins/Logins'
       
      }
      Taro.navigateTo({url}).catch(error=>{
            Taro.switchTab({url}) 
      })
    }
}
export default HeadeSearch
