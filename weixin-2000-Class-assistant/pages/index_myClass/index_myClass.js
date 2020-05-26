const api = require("../../api.js")

Page({

  data: {
    hasvalue: true,
    relations: ''
  },

  towork: function (e) {
    var classid = e.currentTarget.dataset.code
    wx.navigateTo({
      url: '../listwork-class/listwork-class?classid=' + classid,
    })
  },

  toaddit: function () {
    wx.navigateTo({
      url: '../searchclass/searchclass',
    })
  },

  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载',
    })
    var that = this
    wx.getStorage({
      key: 'userOpenid',
      success: function (ress) {
        wx.request({
          url: api.ip + 'relation/getByOpenid?openid=' + ress.data,
          method: 'GET',
          data: {},
          success: function (res) {
            var relations = res.data.result
            console.log(relations)
            if (relations == null) {
              var toastText = '获取数据失败' + res.data.errMsg;
              that.setData({
                hasvalue: false
              })
              wx.showToast({
                title: toastText,
                icon: '',
                duration: 2000 //弹出时间
              })
            } else if (relations.length == 0) {
              that.setData({
                hasvalue: false
              })
            } else {
              that.setData({
                relations: relations,
                hasvalue: true
              })
            }
            setTimeout(function () {
              wx.hideLoading()
            }, 300)
          },
          fail: function () {
            that.setData({
              hasvalue: false
            })
            wx.showToast({
              title: '获取数据失败',
              icon: 'none',
              duration: 500,
              success: function () {
                wx.hideLoading()
              }
            })
          }
        })
      }
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

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})