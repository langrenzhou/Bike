import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import './app.css'
import   '../static/js/zyl.js'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    tabBar: {
      list: [{
        // 'iconPath': 'resource/latest.png',
        // 'selectedIconPath': 'resource/lastest_on.png',
        pagePath: 'pages/index/index',
        text: '首页'
      }, {
        // 'iconPath': 'resource/hotest.png', 
        // 'selectedIconPath': 'resource/hotest_on.png',
        pagePath: 'pages/Types/index',
        text: '分类'
      }, {
        // 'iconPath': 'resource/node.png',
        //////'selectedIconPath': 'resource/node_on.png',
        pagePath: 'pages/Find/index',
        text: '发现'
      },
      {
        // 'iconPath': 'resource/node.png',
        //////'selectedIconPath': 'resource/node_on.png',
        pagePath: 'pages/ShoppingCart/index',
        text: '购物车'
      },
      {
        // 'iconPath': 'resource/node.png',
        //////'selectedIconPath': 'resource/node_on.png',
        pagePath: 'pages/My/index',
        text: '我的'
      }
    ],
      'color': '#000',
      'selectedColor': '#56abe4',
      'backgroundColor': '#fff',
      'borderStyle': 'white'
    },
    pages: [ 
      'pages/index/index',
      'pages/details/details',
      'pages/Types/index',
      'pages/ShoppingCart/index',
      'pages/Find/index',
      'pages/My/index',
      'pages/Logins/Logins',
      'pages/Commodity'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
