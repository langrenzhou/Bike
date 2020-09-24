import Taro, { Component } from "@tarojs/taro-h5";

import './app.css';
import "../static/js/zyl";
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
class App extends Component {
  state = {
    __tabs: {
      list: [{
        // 'iconPath': 'resource/latest.png',
        // 'selectedIconPath': 'resource/lastest_on.png',
        pagePath: "/pages/index/index",
        text: '首页'
      }, {
        // 'iconPath': 'resource/hotest.png', 
        // 'selectedIconPath': 'resource/hotest_on.png',
        pagePath: "/pages/Types/index",
        text: '分类'
      }, {
        // 'iconPath': 'resource/node.png',
        //////'selectedIconPath': 'resource/node_on.png',
        pagePath: "/pages/Find/index",
        text: '发现'
      }, {
        // 'iconPath': 'resource/node.png',
        //////'selectedIconPath': 'resource/node_on.png',
        pagePath: "/pages/ShoppingCart/index",
        text: '购物车'
      }, {
        // 'iconPath': 'resource/node.png',
        //////'selectedIconPath': 'resource/node_on.png',
        pagePath: "/pages/My/index",
        text: '我的'
      }],
      'color': '#000',
      'selectedColor': '#56abe4',
      'backgroundColor': '#fff',
      'borderStyle': 'white',
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    Taro._$app = this;
  }
  componentDidMount() {
    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
          path: '/pages/index/index',
          componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
          isIndex: true
        }, {
          path: '/pages/details/details',
          componentLoader: () => import( /* webpackChunkName: "details_details" */'./pages/details/details'),
          isIndex: false
        }, {
          path: '/pages/Types/index',
          componentLoader: () => import( /* webpackChunkName: "Types_index" */'./pages/Types/index'),
          isIndex: false
        }, {
          path: '/pages/ShoppingCart/index',
          componentLoader: () => import( /* webpackChunkName: "ShoppingCart_index" */'./pages/ShoppingCart/index'),
          isIndex: false
        }, {
          path: '/pages/Find/index',
          componentLoader: () => import( /* webpackChunkName: "Find_index" */'./pages/Find/index'),
          isIndex: false
        }, {
          path: '/pages/My/index',
          componentLoader: () => import( /* webpackChunkName: "My_index" */'./pages/My/index'),
          isIndex: false
        }, {
          path: '/pages/Logins/Logins',
          componentLoader: () => import( /* webpackChunkName: "Logins_Logins" */'./pages/Logins/Logins'),
          isIndex: false
        }]} tabBar={this.state.__tabs} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>;
  }
  config = {
    tabBar: { list: [{ pagePath: "/pages/index/index", text: '首页' }, { pagePath: "/pages/Types/index", text: '分类' }, { pagePath: "/pages/Find/index", text: '发现' }, { pagePath: "/pages/ShoppingCart/index", text: '购物车' }, { pagePath: "/pages/My/index", text: '我的' }], 'color': '#000', 'selectedColor': '#56abe4', 'backgroundColor': '#fff', 'borderStyle': 'white', mode: "hash",
      basename: "/",
      customRoutes: {}
    },
    pages: ["/pages/index/index", "/pages/details/details", "/pages/Types/index", "/pages/ShoppingCart/index", "/pages/Find/index", "/pages/My/index", "/pages/Logins/Logins"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  componentWillUnmount() {
    this.componentDidHide();
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}
Nerv.render(<App />, document.getElementById('app'));