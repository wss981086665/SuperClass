const api = require('../../api.js');

Page({

  data: {
    homework: {},
    hasimage: false
  },

  previewImage: function (e) {
    var articles = [e.currentTarget.dataset.src];
    wx.previewImage({
      urls: articles
    })
  },

  towrite:function() {
    wx.navigateTo({
      url: '../replywork/replywork',
    })
  },

  onLoad: function (options) {
    
  },

  onReady: function () {
    var that = this;
    wx.getStorage({
      key: 'homework',
      success: function (res) {
        var homework = res.data
        // 如果url不等与‘default.jpg’，则显示
        if (homework.imgurl != 'default.jpg') {
          that.setData({
            hasimage: true,
          })
        }
        // 拼接图片url
        homework.imgurl = 'http://www.xztywss.top/img/homeworkup/' + homework.imgurl
        setTimeout(function () {
          that.setData({
            homework: homework
          })
        }, 100)
      },
    })
  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {
    wx.navigateTo({
      url: '../index/index',
    })
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