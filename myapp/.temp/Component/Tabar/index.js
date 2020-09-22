import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import "taro-ui/dist/style/components/icon.scss";
class TarBar extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  render() {
    return <View>
                  <AtTabBar fixed tabList={[{ title: '首页', iconType: 'bullet-list', text: 'new' }, { title: '分类', iconType: 'camera' }, { title: '发现', iconType: 'folder', text: '100' }, { title: '购物车', iconType: 'camera' }, { title: '我的', iconType: 'camera' }]} onClick={this.BarClick.bind(this)} current={this.state.current} />
            </View>;
  }
  BarClick(e) {
    let url = '';
    if (e == 0) {
      url = '';
    } else if (e == 1) {
      url = '';
    } else if (e == 2) {
      url = '';
    } else if (e == 3) {
      url = '';
    } else if (e == 4) {
      url = '';
    }
    Taro.navigateTo({ url: '/pages/thread_detail/thread_detail' });
  }
}
export default TarBar;