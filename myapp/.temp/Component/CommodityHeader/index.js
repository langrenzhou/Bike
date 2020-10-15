import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import './index.css';
class CommodityHeader extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      nuxt: 'data:image/png;base64,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'
    };
    console.log(this.props);
  }
  render() {
    return <View>
                <View className="nuxt">
                    <View className="Nuxtleft" onClick={() => {
          Taro.navigateBack();
        }}>
                        <View className="leftImage">
                            <Image src={this.state.nuxt} style="width:100%;height:100%"></Image>
                        </View>
                    </View>
                    <View className="Nuxtright">
                        {this.props.name}
                    </View>
                </View>
            </View>;
  }
}
export default CommodityHeader;