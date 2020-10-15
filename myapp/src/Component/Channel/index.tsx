import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components'
import './index.css'
import { ChannelImageArr } from './ChannelImg'
class Channel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Images: ChannelImageArr
        }

    }

    render() {

        return (
    <View>
            <View className='channelbig'>
                {
                    this.state.Images.map((item, index) => (
                        <View style='width:25%;'>
                            <View className='channelImgBig' onClick={()=>{Taro.navigateTo({url:item.url+'?type='+item.type})}}>
                                <View className='channelImg'>
                                    <Image src={item.Imgurl} style='width:100%;height:100%'></Image>
                                </View>
                            </View>
                            <View style='width:100%;line-height:.5rem;font-size:.16rem;text-align:center;color:#666'>{item.name}</View>
                        </View>
                    ))

                }
            </View>
            </View>
        )
    }
}
export default Channel





