// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open1:false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    open6: false,
    open7: false,
    open8: false,
    open9: false,
    pop: false
  },
  open1(){
    if(this.data.open1==false){
      this.setData({open1:true})
    }else{
      this.setData({ open1: false })
    }
  },
  open2() {
    if (this.data.open2 == false) {
      this.setData({ open2: true })
    } else {
      this.setData({ open2: false })
    }
  },
  open3() {
    if (this.data.open3 == false) {
      this.setData({ open3: true })
    } else {
      this.setData({ open3: false })
    }
  },
  open4() {
    if (this.data.open4 == false) {
      this.setData({ open4: true })
    } else {
      this.setData({ open4: false })
    }
  },
  open5() {
    if (this.data.open5 == false) {
      this.setData({ open5: true })
    } else {
      this.setData({ open5: false })
    }
  },
  open6() {
    if (this.data.open6 == false) {
      this.setData({ open6: true })
    } else {
      this.setData({ open6: false })
    }
  },
  open7() {
    if (this.data.open7 == false) {
      this.setData({ open7: true })
    } else {
      this.setData({ open7: false })
    }
  },
  open8() {
    if (this.data.open8 == false) {
      this.setData({ open8: true })
    } else {
      this.setData({ open8: false })
    }
  },
  open9() {
    if (this.data.open9 == false) {
      this.setData({ open9: true })
    } else {
      this.setData({ open9: false })
    }
  },
  popout() {
    if (this.data.pop) {
      this.setData({ pop: false })
    }
  },
  pop() {
    if (this.data.pop) {
      this.setData({ pop: false })
    } else {
      this.setData({ pop: true })
    }
  },
  t(){
    console.log(1)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})