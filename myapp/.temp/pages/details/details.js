import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import './details.css';
import Ajax from '../../../static/js/Axios';
import { ShoppingCart, CustSer, Favorites } from '../../../static/js/Img';
import store from '../../store/index';
import { AtMessage, AtToast } from 'taro-ui';
import "taro-ui/dist/style/components/message.scss";
import "taro-ui/dist/style/components/toast.scss";
import "taro-ui/dist/style/components/icon.scss";
class Details extends Taro.Component {
  constructor() {
    super();
    this.state = {
      shoppingcar: false,
      Favorites,
      ShoppingCart,
      CustSer,
      CommoditysDetails: {},
      leftImg: 'data:image/png;base64,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',
      rightImg: 'data:image/png;base64,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'
    };
  }
  componentWillMount() {
    Ajax.Axios_request(`/commodityDetails?id=${this.$router.params.id}`).then(res => {
      this.setState({
        CommoditysDetails: res.data[0]
      });
    });
  }
  JoinShoopingCar() {
    const { Login, UserInfo } = store.getState();
    const data = this.state.CommoditysDetails;
    if (!Login) {
      Taro.atMessage({
        'message': '您还没有登录，请进行登录',
        'type': 'error'
      });
      setTimeout(() => {
        Taro.navigateTo({ url: '/pages/Logins/Logins' });
      }, 500);
      return;
    }
    Ajax.Axios_request('/shoppingcar', { ...data, userid: UserInfo.id }, 'Post').then(res => {
      if (res.data.data == 'success') {
        this.setState({
          shoppingcar: true
        });
      }
    });
  }
  render() {
    return <View style="background-color:#f5f5f5;">
                    <AtMessage />
                    <AtToast isOpened={this.state.shoppingcar} text="添加成功"></AtToast>
                    <View className="DetailsHeader">
                         <View className="DetailsHeaderImg">
                              <Image src={this.state.CommoditysDetails.IMGURL} style="width:100%;height:100%;"></Image>
                         </View>
                         <View className="DetailsNextBig">
                              <View className="DetailsNext">
                                   <View className="DetailsNextLeft" onClick={() => {
              Taro.navigateBack();
            }}>
                                        <View style="width:.4rem;height:.4rem;font-size:0;">
                                             <Image src={this.state.leftImg} style="width:100%;height:100%;"></Image>
                                        </View>
                                   </View>
                                   <View className="DetailsNextLeft">
                                        <View style="width:.3rem;height:.3rem;font-size:0;">
                                             <Image src={this.state.rightImg} style="width:100%;height:100%;"></Image>
                                        </View>
                                   </View>
                              </View>
                         </View>
                    </View>
                    <View className="Footer">
                         <View className="FooterLeft">
                              <View className="FooterLeftItem">
                                   <View className="FooterImg">
                                        <Image src={this.state.Favorites} style="width:100%;height:100%"></Image>
                                   </View>
                                   <View className="FooterText">收藏</View>
                              </View>
                              <View className="FooterLeftItem">
                                   <View className="FooterImg">
                                        <Image src={this.state.CustSer} style="width:100%;height:100%"></Image>
                                   </View>
                                   <View className="FooterText">客服</View>
                              </View>
                              <View className="FooterLeftItem">
                                   <View className="FooterImg">
                                        <Image src={this.state.ShoppingCart} style="width:100%;height:100%"></Image>
                                   </View>
                                   <View className="FooterText">购物车</View>
                              </View>
                         </View>
                         <View className="FooterLeft">
                              <View className="FooterRightItem" style="background-image: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);" onclick={this.JoinShoopingCar.bind(this)}>加入购物车</View>
                              <View className="FooterRightItem" style="background-image:linear-gradient(135deg,#ffba0d,#ffc30d 69%,#ffcf0d);">立即购买</View>
                         </View>
                    </View>
               </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
export default Details;