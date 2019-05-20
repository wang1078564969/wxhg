// pages/mydata/mydata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    model: false,
    title:""
  },
  model1(){
    this.setData({title:"修改手机号"})
    if(this.data.model){
      this.setData({model:false})
    }else{
      this.setData({ model: true })
    }
  },
  model2() {
    this.setData({ title: "修改地址" })
    if (this.data.model) {
      this.setData({ model: false })
    } else {
      this.setData({ model: true })
    }
  },
  modelout(){
    this.setData({ model: false })
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