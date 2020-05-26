// pages/listwork/listwork.js
const api = require('../../api.js');
Page({

  data: {
    homeworks: '',
    page: 0,
    hiddenpage: true,
    hasvalue: true,
  },

  demofun: function (e) {
    var codeid = e.currentTarget.dataset.code + e.currentTarget.dataset.id
    wx.setStorage({
      key: 'codeid',
      data: codeid,
      success: function () {
        wx.navigateTo({
          url: '../listanswer/listanswer',
        })
      }
    })
  },

  loadmore: function () {
    var that = this;
    var page = that.data.page + 1;
    wx.getStorage({
      key: 'userOpenid',
      success: function (res) {
        var openid = res.data;
        wx.showLoading({
          title: '正在加载',
        })
        setTimeout(function () {
          wx.request({
            url: api.ip + 'homework/gethomeworkbyopenid?openid=' + openid + '&page=' + page * 10,
            method: 'GET',
            data: {},
            success: function (res) {
              var ihomeworks = res.data.result
              if (ihomeworks == null) {
                var toastText = '获取数据失败' + res.data.errMsg;
                wx.showToast({
                  title: toastText,
                  icon: '',
                  duration: 2000 //弹出时间
                })
              } else {
                if (ihomeworks.length == 0) {
                  wx.showToast({
                    title: '没有更多内容',
                    icon: 'none',
                    duration: 500
                  })
                } else {
                  var theworks = that.data.homeworks;
                  that.setData({
                    homeworks: theworks.concat(ihomeworks),
                    page: page
                  });
                  wx.hideLoading();
                }
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
        }, 500)
      },
    })
  },

  onLoad: function (options) {
    var that = this
    var page = that.data.page
    var openid = options.openid
    wx.showLoading({
      title: '正在加载',
    })
    wx.request({
      url: api.ip + 'homework/gethomework?openid=' + openid + '&page=' + page * 10,
      method: 'GET',
      data: {},
      success: function (res) {
        var homeworks = res.data.result
        if (homeworks == null) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000 //弹出时间
          })
        } else {
          if (homeworks.length == 0) {
            that.setData({
              hasvalue: false
            })
          } else {
            that.setData({
              homeworks: homeworks,
              rejudge: false,
            });
            if (homeworks.length == 10) {
              that.setData({
                hiddenpage: false
              })
            }
          }
          wx.hideLoading();
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