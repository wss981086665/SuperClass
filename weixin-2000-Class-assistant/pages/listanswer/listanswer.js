const api = require('../../api.js');
Page({

  data: {
    codeid:'',
    answerlist: [],
    hasvalue: true
  },

  tocontent:function(e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var answer = that.data.answerlist[index]
    setTimeout(function() {
      wx.navigateTo({
        url: '../answer-detail/answer-detail?id=' + answer.id + '&name=' + answer.name,
      })
    }, 50)
  },

  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载',
    })
    var that = this
    wx.getStorage({
      key: 'codeid',
      success: function (res) {
        var codeid = res.data
        wx.request({
          url: api.ip + 'reply/getByCodeid?codeid=' + codeid,
          method: 'GET',
          data: {},
          success: function (res) {
            var answerlist = res.data.result
            if (answerlist == null) {
              var toastText = '获取数据失败' + res.data.errMsg;
              wx.showToast({
                title: toastText,
                icon: '',
                duration: 2000 //弹出时间
              })
            } else {
              if (answerlist.length == 0) {
                that.setData({
                  hasvalue: false
                })
              } else {
                that.setData({
                  answerlist: answerlist,
                });
              }
              setTimeout(function() {
                wx.hideLoading();
              },500) 
            }
          },
          fail:function() {
            wx.showToast({
              title: '获取数据失败',
              icon: 'none'
            })
          }
        })
      },
      fail:function() {
        wx.hideLoading()
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
    this.onLoad()
    wx.stopPullDownRefresh() //停止下拉刷新
  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})