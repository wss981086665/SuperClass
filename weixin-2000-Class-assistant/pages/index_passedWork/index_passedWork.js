// pages/passwork/passwork.js
const api = require('../../api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    replys: [],
    hasvalue: false
  },

  toSearchWork: function() {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  toAddCourse: function() {
    wx.navigateTo({
      url: '../index_myClass/index_myClass',
    })
  },

  onLoad: function (options) {
    var that = this
    wx.showLoading({
      title: '正在加载',
    })
    setTimeout(function () {
      wx.getStorage({
        key: 'userOpenid',
        success: function (res) {
          var openid = res.data
          wx.request({
            url: api.ip + 'reply/getByOpenid?openid=' + openid,
            method: 'GET',
            data: {},
            success: function (ress) {
              var replys = ress.data.result
              if (replys == null) {
                var toastText = '获取数据失败' + ress.data.errMsg;
                wx.showToast({
                  title: toastText,
                  icon: '',
                  duration: 2000 //弹出时间
                })
              } else {
                if (replys.length == 0) {
                  that.setData({
                    hasvalue: false
                  })
                } else {
                    that.setData({
                      replys: replys,
                      hasvalue: true
                    });
                }
                setTimeout(function () {
                  wx.hideLoading();
                }, 300)
              }
            },
            fail: function () {
              wx.showToast({
                title: '获取数据失败',
                icon: 'none',
                duration: 500
              })
            }
          })
        },
      })
    }, 500)
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