import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './index.css';
import HeaderSearch from "../../Component/HeaderSearch/index";
import store from '../../store/index';
import Swipers from "../../Component/swiper/index";
import Channel from "../../Component/Channel/index";
export default class Index extends Taro.Component {
  constructor() {
    super();
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    console.log(store.getState());
    return <View className="index">
       
          <HeaderSearch />
          <Swipers />
          <Channel />
        </View>;
  }
  config = {
    navigationBarTitleText: '比克优选'
  };
}