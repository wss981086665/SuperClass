const api = require('../../api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifocus: true,
    searchword: '',
    idata: ['', '', '', '']
  },

  getFocus: function () {
    this.setData({
      ifocus: true,
    })
  },

  searchin: function (e) {
    var that = this;
    var searchword = e.detail.value;
    var length = e.detail.value.length;
    var idata = that.data.idata
    for (var i = 0; i < length; i++) {
      idata[i] = searchword.substring(i, i + 1)
    }
    for (var i = length; i < 4; i++) {
      idata[i] = ''
    }
    that.setData({
      searchword: searchword,
      idata: idata
    })
    if (length == 4) {
      wx.request({
        method: 'GET',
        url: api.ip + '/democlass/getclassbyclassid?classid=' + searchword,
        success: function (res) {
          var classes = res.data.result
          if (classes == null) {
            var toastText = '获取数据失败' + res.data.errMsg;
            wx.showToast({
              title: toastText,
              icon: '',
              duration: 2000 //弹出时间
            })
          } else if (classes.length == 1) {
            wx.setStorage({
              key: 'democlass',
              data: classes[0],
              success: function () {
                wx.navigateTo({
                  url: '../democlass/democlass?classid=' + searchword,
                })
              }
            })
          } else {
            wx.setStorage({
              key: 'classes',
              data: classes,
              success:function() {
                wx.navigateTo({
                  url: '../classlist/classlist',
                })
              }
            })
          }
        },
        fail: function () {
          wx.showToast({
            title: '获取数据失败',
          })
        }
      })
    }
    wx.hideLoading();
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