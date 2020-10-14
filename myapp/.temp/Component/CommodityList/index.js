import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import './index.css';
class CommodityList extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return <View className="CommodityItemBig">
                {this.props.datas.map(item => <View className="CommodityItem">
                        <View className="CommodityItemImage">
                            <Image src={item.IMGURL} lazyLoad style="width:100%;height:100%"></Image>
                        </View>
                    </View>)}
            </View>;
  }
}
export default CommodityList;