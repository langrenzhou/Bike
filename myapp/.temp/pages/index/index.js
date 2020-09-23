import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './index.css';
import HeaderSearch from "../../Component/HeaderSearch/index";
import Ajax from '../../../static/js/Axios';
export default class Index extends Taro.Component {
  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
  }
  componentWillMount() {
    console.log(new Ajax().Axios_request({}).then(res => {
      console.log(res);
    }));
  }
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="index">
        <HeaderSearch />
        
      </View>;
  }
  config = {
    navigationBarTitleText: '比克优选'
  };
}