const api = require('../../api.js');

Page({

  data: {
    classes: {},
    hasvalue: true
  },

  onLoad: function (options) {
    var that = this
    var classes = options.classes
    if (classes.length == 0) {
      that.setData({
        hasvalue: false
      })
    } else {
      that.setData({
        classes: classes
      })
    }
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