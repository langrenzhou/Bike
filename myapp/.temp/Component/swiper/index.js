import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import Ajax from '../../../static/js/Axios';
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
    });
  }
  render() {
    return <View>
             
                 
            </View>;
  }
}
export default Swipers;