let app = getApp()
let isIphoneX = app.globalData.isIphoneX;


Page({
  data: {
    currentTab: 0,
    isIphoneX:'',
    items: [
      {
        "iconPath": "/pages/img/index2.png",
        "selectedIconPath": "/pages/img/index1.png",
        "text": "工作"
      },
      {
        "iconPath": "/pages/img/my2.png",
        "selectedIconPath": "/pages/img/my1.png",
        "text": "我的"
      }
    ]
  },
  swichNav: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onLoad: function (option) {
    this.setData({
      isIphoneX: isIphoneX
    })
    console.log(this.data.isIphoneX)
  }
})
