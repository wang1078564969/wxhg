// pages/mysalary/mtsalary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pop:false
  },
  popout(){
    if (this.data.pop){
      this.setData({ pop: false })
    }
  },
  pop(){
    if(this.data.pop){
      this.setData({pop:false})
    }else{
      this.setData({ pop: true })  
    }
  },
  salary(){
    wx.navigateTo({
      url: '/pages/mysalary/salary/salary'
    })
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