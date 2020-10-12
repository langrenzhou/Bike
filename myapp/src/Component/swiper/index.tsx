import Taro ,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import { Swiper, SwiperItem } from '@tarojs/components'
import Ajax from '../../../static/js/Axios'
class Swipers extends Component{
    constructor(props){
        super(props)
        this.state={
            ImgUrlArr:[]
        }
    }
    componentWillMount(){
        Ajax.Axios_request('/banner').then(res=>{
            this.setState({
                ImgUrlArr:res.data
            })
        })
    }
    render(){
        return(
            <View>
             
                 
            </View>
        )
    }
}
export default Swipers
