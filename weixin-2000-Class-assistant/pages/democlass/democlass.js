const api = require('../../api.js');

Page({

  data: {
    code:'',
    democlass:{},
    teacher:'',
    truename:'',
    openid:''
  },

  addclass:function() {
    wx.showLoading({
      title: '正在添加',
    })
    var that = this
    var openid = ''
    var code = that.data.code
    wx.getStorage({
      key: 'userOpenid',
      success: function (ress) {
        openid = ress.data
        wx.request({
          method: 'POST',
          url: api.ip + 'relation/insert?openid=' + openid + '&code=' + code,
          success: function (res) {
            // 返回的插入信息
            var result = res.data.result
            if (result == "success") {
              setTimeout(function () {
                wx.showToast({
                  title: '添加成功',
                  success: function () {
                    setTimeout(function () {
                      wx.navigateTo({
                        url: '../index/index'
                      })
                    }, 1000)
                  }
                })
              }, 500)
            } else if (result == "exist") {
              setTimeout(function () {
                wx.showToast({
                  title: '失败：重复添加！',
                  icon: 'none'
                })
              }, 500)
            }
          },
          fail: function () {
            wx.showToast({
              title: '添加失败',
            })
          }
        })
      },
    })
  },

  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载',
    })
    var that = this
    var code = options.code
    wx.getStorage({
      key: 'democlass',
      success: function(res) {
        wx.request({
          method: 'GET',
          url: api.ip + '/user/getUser?openid=' + res.data.openid,
          success: function (ress) {
            var teacher = ress.data.result
            console.log(teacher)
            if (teacher == null) {
              var toastText = '获取数据失败' + res.data.errMsg;
              wx.showToast({
                title: toastText,
                icon: '',
                duration: 2000 //弹出时间
              })
            } else  {
              that.setData({
                teacher: teacher,
                democlass: res.data,
                code: code,
              })
              wx.hideLoading()
            }
          },
          fail: function () {
            wx.showToast({
              title: '获取数据失败',
            })
          }
        })
      },
      fail:function() {
        wx.showToast({
          title: '本地数据异常',
          icon:'none',
          success:function() {
            setTimeout(function() {
              wx.navigateTo({
                url: '../index/index',
              })
            },1500)
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

  onShareAppMessage: function () {

  }
})