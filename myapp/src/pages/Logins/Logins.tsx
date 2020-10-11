import Taro, { Component, Config } from '@tarojs/taro'
import { AtInput } from 'taro-ui'
import "taro-ui/dist/style/components/input.scss";
import { View, Image, Text, Input, Button } from '@tarojs/components'
import './index.css'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import "taro-ui/dist/style/components/modal.scss";
import Ajax from '../../../static/js/Axios'
import { AtMessage } from 'taro-ui'
import "taro-ui/dist/style/components/message.scss";
class Logins extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Phone: '',
            Code: '',
            InputButton: false,
            Pwd: false,
            isOpened: false,
            registered: false,
            Password: ''
        }

    }
    config: Config = {
        navigationBarTitleText: '比克优选登录注册'
    }
    render() {
        return (
            <View>
                <AtMessage />
                <AtModal
                    isOpened={this.state.isOpened}
                >
                    <AtModalHeader>比克优选注册协议</AtModalHeader>
                    <AtModalContent>
                        在您注册成为比克优选用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：<br />《比克优选注册协议》<br />《比克优选隐私政策》<br />《订单共享与安全》<br />【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意京东可以依据以上的隐私政策内容来处理您的个人信息。
                     </AtModalContent>
                    <AtModalAction>
                        <Button onClick={() => { this.setState({ isOpened: false }) }}>取消</Button> <Button onClick={() => { this.setState({ Pwd: false, isOpened: false, registered: true }); }}>确定</Button>
                    </AtModalAction>
                </AtModal>
                <View className='Header'>
                    <View className='img'
                        onClick={() => { Taro.navigateBack() }}
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
                            onChange={this.ChangeInput.bind(this, 'Phone')}
                            style='padding:0;'
                            type={this.state.Pwd ? "text" : "phone"}
                            placeholder={this.state.Pwd ? "邮箱/账号/手机号" : "请输入手机号码"}
                            value={this.state.Phone}
                        />
                    </View>
                    <View className={['PhoneInput', this.state.registered ? 'block' : 'none']}>
                        <AtInput
                            onChange={this.ChangeInput.bind(this, 'Password')}
                            type='password'
                            placeholder={"请输入密码"}
                            value={this.state.Password}
                        />
                    </View>
                    <View className='CodeInput'>
                        <AtInput
                            onChange={this.ChangeInput.bind(this, 'Code')}
                            style='padding:0;'
                            clear
                            type={this.state.Pwd ? "password" : "number"}
                            placeholder={this.state.Pwd ? '请输入密码' : "请输入收到的验证码"}
                            maxLength={this.state.Pwd ? '16' : '6'}
                            value={this.state.Code}

                        >
                            <View style='border-left:.01rem solid #ccc;color:' onClick={this.ObtainCode.bind(this)}>{this.state.Pwd ? "忘记密码" : "获取验证码"}</View>
                        </AtInput>
                    </View>
                    <View className={['Button', this.Pwd ? this.state.Code != '' && this.state.Phone != '' ? 'Two' : 'One' : this.state.registered ? this.state.Code != '' && this.state.Phone != '' && this.state.Password != '' ? 'Two' : 'One' : this.state.Code != '' && this.state.Phone != '' ? 'Two' : 'One']} onClick={this.Lregister.bind(this)}>{this.state.registered ? '注册' : '登录'}</View>
                    <View className='LoginsType'>
                        <View onClick={() => { this.setState({ Pwd: !this.state.Pwd, Code: '', Phone: '', registered: false }) }}>{this.state.Pwd ? '手机验证码登录' : '账号密码登录'}</View>
                        <View onClick={() => { this.setState({ isOpened: !this.state.isOpened, Code: '', Phone: '' }) }}>手机快速注册</View>
                    </View>
                </View>
            </View>
        )
    }
    ChangeInput(e, type) {
        this.setState({
            [e]: type
        })
    }
    ObtainCode() {
        console.log('获取验证码操作还在建设中')
    }
    Lregister() {
        const { registered, Code, Phone, Password } = this.state
        if (Code == '' || Phone == '') {

        } else if (registered) {
            console.log('这里是注册')
            if (Password != '') {
                Ajax.Axios_request('/register?Name=' + Phone + '&Password=' + Password, {}).then(res => {
                    if (res.data == '已被注册') {
                        Taro.atMessage({
                            'message': '该账号已被注册',
                            'type': 'error',
                        })
                    } else {
                        Taro.atMessage({
                            'message': '注册成功，请进行登录',
                            'type': 'success',
                        })
                        this.setState({
                            registered:false
                        })
                    }
                })
            } else {

                Taro.atMessage({
                    'message': '请输入密码',
                    'type': 'error',
                })
            }
        } else {
            Ajax.Axios_request(`/Logins?Name=${Phone}&Password=${Code}`, {}).then(res => {
                console.log(res)
                if(res.data[0].Name){
                    Taro.atMessage({
                        'message': '登录成功',
                        'type': 'success',
                        duration:2000
                    })
                    setTimeout(()=>{
                        Taro.navigateBack()
                    },2000)
                }else if(res == '错误'){
                    Taro.atMessage({
                        'message': '账号或者密码错误',
                        'type': 'error',
                    })
                }else{
                    Taro.atMessage({
                        'message': '该账号没有注册',
                        'type': 'error',
                    })  
                }
            })
        }
    }
}
export default Logins
