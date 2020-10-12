import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import Ajax from '../../../static/js/Axios';
import './swiper.css';
class Swipers extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      ImgUrlArr: []
    };
  }
  componentWillMount() {
    Ajax.Axios_request('/banner').then(res => {
      this.setState({
        ImgUrlArr: res.data
      });
      this.render();
    });
  }
  render() {
    return <View>
                <View className="SwiperBack">
                    {this.state.ImgUrlArr.length > 0 ? <Swiper className="test-h" indicatorColor="#fff" indicatorActiveColor="#ec4b6a" interval="1000" circular={this.state.ImgUrlArr.length > 0 ? true : false} indicatorDots autoplay className="Swipers">
                            {this.state.ImgUrlArr.map(item => <SwiperItem key={item.id} className="SwiperItem">
                                    <Image src={item.url} style="width:100%;height:100%;"></Image>
                                </SwiperItem>)}
                        </Swiper> : ''}
                </View>
            </View>;
  }
}
export default Swipers;