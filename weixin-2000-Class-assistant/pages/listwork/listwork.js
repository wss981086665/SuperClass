// pages/listwork/listwork.js
const api = require('../../api.js');
Page({

  data: {
    homeworks: '',
    page: 0,
    hiddenpage: true,
    hasvalue: true,
    judgedelete: true,
    rejudge: true,
  },

  demofun:function(e) {
    var codeid = e.currentTarget.dataset.code + e.currentTarget.dataset.id 
    wx.setStorage({
      key: 'codeid',
      data: codeid,
      success:function() {
        wx.navigateTo({
          url: '../listanswer/listanswer',
        })
      }
    })
  },

  condelete: function () {
    this.setData({
      judgedelete: false
    })
  },

  delete:function(e) {
    var that = this
    var id = e.currentTarget.dataset.id

    wx.showModal({
      title: '温馨提示',
      content: '确定要删除吗？',
      confirmColor: '#6A5ACD',
      confirmText: '删除',
      success: function (res) {
        if (res.confirm) {
          wx.showLoading({
            title: '正在处理',
          })
          wx.request({
            url: api.ip + '/homework/deletehomeworkbyid?id=' + id,
            success: function () {
              wx.showToast({
                title: '删除成功',
              })
              that.onLoad();
            },
            fail: function () {
              wx.showToast({
                title: '服务器连接失败',
                icon: 'none',
                duration: 500
              })
            }
          })
        }
      }
    })

  },

  nodelete: function () {
    this.setData({
      judgedelete: true
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
        setTimeout(function() {
          wx.request({
            url: api.ip + 'homework/gethomeworkbyopenid?openid=' + openid + '&page=' + page * 10,
            method: 'GET',
            data: {},
            success: function (ress) {
              var ihomeworks = ress.data.result
              if (ihomeworks == null) {
                var toastText = '获取数据失败' + ress.data.errMsg;
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
        },500)
      },
    })
  },

  onLoad: function (options) {
    var that = this
    var page = that.data.page
    wx.showLoading({
      title: '正在加载',
    })
    setTimeout(function() {
      wx.getStorage({
        key: 'userOpenid',
        success: function (res) {
          var openid = res.data
          wx.request({
            url: api.ip + 'homework/gethomeworkbyopenid?openid=' + openid + '&page=' + page * 10,
            method: 'GET',
            data: {},
            success: function (ress) {
              var homeworks = ress.data.result
              if (homeworks == null) {
                var toastText = '获取数据失败' + ress.data.errMsg;
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
                setTimeout(function() {
                  wx.hideLoading();
                },300)
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
    },500)
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