export default {
  pages: [
    "pages/index/index",
    'pages/cart/index',
    'pages/order/index',
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#090",
    navigationBarTitleText: "周末户外玩",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: '#7b7b7a',
    selectedColor: '#c0a369',
    backgroundColor: '#222222',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'asset/home.png',
        selectedIconPath: 'asset/home_active.png'
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车',
        iconPath: 'asset/shoppingbag.png',
        selectedIconPath: 'asset/shoppingbag_active.png'
      },
      {
        pagePath: 'pages/order/index',
        text: '订单',
        iconPath: 'asset/mine.png',
        selectedIconPath: 'asset/mine_active.png'
      }
    ]
  },
  cloud: true,
};
