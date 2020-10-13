import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'
import HeaderSearch from '../../Component/HeaderSearch'
import store from '../../store/index'
import Swipers from '../../Component/swiper'
import Channel from '../../Component/Channel'
export default class Index extends Component {
  constructor() {
    super()
  }

  componentWillMount() {

  }

  componentDidMount() { }

  componentWillUnmount() { }
  j
  componentDidShow() { }

  componentDidHide() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '比克优选'
  }

  render() {
    console.log(store.getState())
    return (
      <View className='index'>
       
          <HeaderSearch />
          <Swipers />
          <Channel />
        </View>
    )
  }
}
