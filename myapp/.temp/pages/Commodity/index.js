import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { CommodityHeader } from "../../Component/CommodityHeader/index";
import Ajax from '../../../static/js/Axios';
import './Commodity.css';
class Commodity extends Taro.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(Ajax.Axios_request);
    console.log(this.$router);
  }
  render() {
    return <View>
                <CommodityHeader />
                这里是商品列表页面
            </View>;
  }
}
export default Commodity;