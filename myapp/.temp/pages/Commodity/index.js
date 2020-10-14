import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import CommodityHeader from "../../Component/CommodityHeader/index";
import Ajax from '../../../static/js/Axios';
import './Commodity.css';
import CommodityList from "../../Component/CommodityList/index";
class Commodity extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      CommodityList: []
    };
  }
  componentWillMount() {
    Ajax.Axios_request('/commodity?type=' + this.$router.params.type).then(res => {
      this.setState({ CommodityList: res.data });
    });
    console.log(this.state);
    let { type } = this.$router.params;
    let { name } = this.state;
    switch (type) {
      case 'liqueur':
        name = '比克酒家';
        break;
      case 'Phone':
        name = '比克3c';
        break;
      case 'Cloths':
        name = '比克服饰';
        break;
      case 'home':
        name = '比克家电';
        break;
      case 'makeups':
        name = '美妆馆';
        break;
      case 'medicine':
        name = '药到家';
        break;
      case 'snacks':
        name = '零食天地';
        break;
      case 'Supermakerts':
        name = '比克超市';
    }
    this.setState({ name });
  }
  render() {
    return <View style="background-color:#f5f5f5">
                <CommodityHeader name={this.state.name} />
                <View className="CommodityList">
                    {this.state.CommodityList.length ? <CommodityList datas={this.state.CommodityList} /> : ''}
                </View>
            </View>;
  }
}
export default Commodity;