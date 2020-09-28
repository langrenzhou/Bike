import Taro, { Component, Config } from '@tarojs/taro'
import { AtInput } from 'taro-ui'
import "taro-ui/dist/style/components/input.scss";
import { View, Image, Text, Input } from '@tarojs/components'
import './index.css'
class Logins extends Component {
    constructor(props) {
        super(props)
        this.state={
            userName:'',
            password:'',
            InputButton:false
        }

    }
    config: Config = {
        navigationBarTitleText: '比克优选登录注册'
    }
    render() {
        return (
            <View>
                <View className='Header'>
                    <View className='img'
                        onClick={this.edit.bind(this)}
                    >
                        <Image
                            style='width:.3rem;height:.3rem;'
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAYpJREFUaAXtmLFOwzAQhhvKE2Rnygu1EhIDezeeho2doRIDG++BhARDNvY8QZX+f6ilArbjs1t0FmcpcWPfnf/v6sinLBbWLAOWAcuAZeA/Z6A5FXzXdSvEuj/E2/R9/3Kq2LE4l7HJ1DmIvxnH8RH2S/o0TfOA7oq/z90uShf4Kb40ntS/CCAgfgcRd1IhufbZACHx2D632P/PuYKkflkv8Yz4rVREib0YQJN4gosAtIkXAWgUnwygVXwSgGbxswDaxUcBahAfBKhFvBcA4lcozJ4wORVmNELbHU7YPz2kvpaO332lBEviKsQTzQcQR1Y26wNgJcmK0rUla32+F25AU3+8VSZdwzC8t237gYc1LgfIfs1xzL9NhkpuvwCoiyJrgfAC1AQRBKgFIgpQA8QsgHaIJADNEMkAWiFEABohxADaILIAEiBeeaLT7tzNlQpZ6+AD1pZlNpy/1U54dh95s+JKnIoAuFAAQqKhyLYY4AjiGv/GJy+MbYpUmbNlwDJgGbAMWAYSM7AH/J4Amlfxzk4AAAAASUVORK5CYII='></Image>
                    </View>
                    <View className='title'>比克优选登录注册</View>
                </View>
            
                <View>
                    <View className='PhoneInput'>
                        <AtInput
                        onChange={this.ChangeInput.bind(this,'Phone')}
                            style='padding:0;'
                            type='phone'
                            placeholder='请输入手机号码'
                        // value={this.state.value6}
                        // onChange={this.handleChange.bind(this)}
                        />
                    </View>
                    <View className='CodeInput'>
                        <AtInput
                           onChange={this.ChangeInput.bind(this,'Code')}
                            style='padding:0;'
                            clear
                            type='number'
                            placeholder='请输入收到的验证码'
                            maxLength='6'
                        // value={this.state.value}
                        // onChange={this.handleChange.bind(this)}
                        >
                            <View style='border-left:.01rem solid #ccc;'>获取验证码</View>
                        </AtInput>
                    </View>
                    <View className={['Button', this.state.InputButton ? 'Two':'One']}>登录</View>
                </View>
            </View>
        )
    }
    edit() {
        Taro.navigateBack()
    }
    ChangeInput(e,type){
          console.log(e)
          console.log(type)
    }
}
export default Logins
