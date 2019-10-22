const api = require('../../api.js');

Page({

  data: {
    homeworks: [],
    hasvalue: false
  },

  to_reply: function(e) {
    var that = this
    var index = e.currentTarget.dataset.index
    wx.setStorage({
      key: 'homework',
      data: that.data.homeworks[index],
      success: function () {
        wx.navigateTo({
          url: '../homework/homework',
        })
      }
    })
  },

  onLoad: function () {
    var that = this
    wx.getStorage({
      key: 'homeworks',
      success: function(res) {
        var homeworks = res.data
        if (homeworks.length != 0) {
          that.setData({
            homeworks: homeworks,
            hasvalue: true
          })
        }
      },
    })
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

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