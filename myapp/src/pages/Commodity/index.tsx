import Taro,{Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {CommodityHeader} from '../../Component/CommodityHeader'
import Ajax from '../../../static/js/Axios'
import './Commodity.css'

class Commodity extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
   console.log(Ajax.Axios_request)
   console.log(this.$router)
    }
    render(){
        return(
            <View>
                <CommodityHeader />
                这里是商品列表页面
            </View>
        )
    }
} 
export default Commodity
