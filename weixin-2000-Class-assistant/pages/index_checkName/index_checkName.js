// pages/index_checkName/index_checkName.js
const api = require('../../api.js');
Page({

  data: {
    courses: [],
    hasvalue: true
  },

  toDianming: function(e) {
    var code = e.currentTarget.dataset.code

    wx.navigateTo({
      url: './checkName/checkName?code=' + code,
    })
  },

  toCreateWork: function() {
    wx.navigateTo({
      url: '../creatclass-tip/creatclass-tip',
    })
  },

  onLoad: function (options) {
    var that = this
    wx.showLoading({
      title: '正在加载',
    })
    wx.getStorage({
      key: 'userOpenid',
      success: function(res) {
        var openid = res.data
        wx.request({
          method: 'GET',
          url: api.ip + 'course/getByOpenid?openid=' + openid,
          success:function(ress){
            var courses = ress.data.result
            if (courses == null) {
              var toastText = '获取数据失败' + ress.data.errMsg;
              wx.showToast({
                title: toastText,
                icon: '',
                duration: 2000 //弹出时间
              })
            } else {
              if (courses.length == 0) {
                that.setData({
                  hasvalue: false
                })
              } else {
                that.setData({
                  courses: courses
                });
              }
              setTimeout(function () {
                wx.hideLoading()
              }, 100)
            }
          }
        })
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

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})