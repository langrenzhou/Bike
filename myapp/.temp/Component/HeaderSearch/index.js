import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import './index.css';
// import Ajax from '../../../static/js/Axios'
import store from '../../store/index';
class HeadeSearch extends Taro.Component {
  componentWillMount() {
    //    const aaa=new Ajax()
    //    console.log(aaa)
  }
  constructor(props) {
    super(props);
    this.state = {
      store: {}
    };
    this.state.store = store.getState();
  }
  render() {
    return <View className="big">
                <View className="area">
                    <View className="Type">
                        <Image style="width:.2rem;height:.2rem;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgAgMAAAAdw9KTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwDjSYAlncUAAAAbSURBVBjTY5j/Hwq+MdTDmH+RmUgK6AuGhcsAU5tyB6Ji+x0AAAAASUVORK5CYII"></Image>
                    </View>
                    <View className="left">


                        
                    </View>
                    <View className="right" onClick={this.Login.bind(this)} style={this.state.Login ? 'font-size:0' : 'font-size:0.2rem'}>
                        {this.state.Login ? <Image style="width:.26rem;height:.26rem;font-size:0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAMAAAAgsQpJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwAdEr+crtuABfTnao8pUMpddzJFO9SD9HUAAAFqSURBVDjLjVVbAoMgDBN5CfhC5P5XXYtuDilivyaEpg0p67oiJufnvmvF4FTEkOEZ52z8xrLVYb1EhJEjT1BXpV1gVzmsbxoN/PYVoIC9cTg/GJ6aSdycsw3Ab8juIYXIKlY0+V4kWGO0BNDfEgI5aDWVQJBmbS9BqPK4BhVeAR0JhKZDCRQFbiX0xbWN6EXd5WWWUJJTJvBEkbCmCpcoQh9G1AjNmIHyzpKvMrCaLuXB5awgtI8aiMvWN3K0514zuJmycxWLo2yWnR9jpK7ljM38NtHucqiO4WVe/ohLFjoul/bsxQ2Ev4yi/pysUKO8auR0TqbxOcm6jsta1Lmn1ySqXEfobWQZ7HhsrP535CZNgoprMdFEPt95ep/eQBP+LtUIuvKQuMLXdVGyqhZBnS0y8yQZFmAPgCwMW+SMeE2MGslyQjXOLm/9A8yI8Y0KT1MtiLa6Eei5NLsvApTc3iDTePauRa1hOD/vACHPGH6amQAAAABJRU5ErkJggg==">'
                     </Image> : '登录'}

                    </View>
                </View>
            </View>;
  }
  Login(e) {
    let url = '';
    if (this.store.Login) {
      url = '/pages/My/index';
    } else {
      url = '/pages/Logins/Logins';
    }
    Taro.navigateTo({ url });
  }
}
export default HeadeSearch;