import Taro, { Component } from '@tarojs/taro'
import { View, Image,Text } from '@tarojs/components'
import './index.css'
class CommodityList extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    componentWillMount() {

    }
    render() {

        return (
            <View  className='CommodityItemBig'>
                {this.props.datas.map(item => (
                    <View className='CommodityItem' onClick={this.details.bind(this,item)}>
                        <View className='CommodityItemImage'>
                            <Image src={item.IMGURL} lazyLoad style='width:100%;height:100%'></Image>
                        </View>
                <Text className='CommodityItemText'>{item.Introduction}</Text>
                <View style='width:92%;margin: 0 auto;line-height:.3rem;color:red;font-size:.26rem;'>￥ ：{item.price}</View>
                    </View>
                ))}
            </View>
        )
    }
    details(e){
        const id=e.Id
        Taro.navigateTo({url:`/pages/details/details?id=${id}`})
    }
}

export default CommodityList