// pages/myhomework/myhomework.js
const api = require('../../api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeworks: '',
    page: 0,
    hiddenpage: true,  //控制加载更多
    hasvalue: true,
  },

  to_reply: function (e) {
    var that = this
    var code = e.currentTarget.dataset.code
    var id = e.currentTarget.dataset.id
    wx.request({
      method: 'GET',
      url: api.ip + 'homework/getByIdAndCode?id=' + id + '&code=' + code,
      success: function (res) {
        var homework = res.data.result
        if (homework == null) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000 //弹出时间
          })
        } else {
          wx.setStorage({
            key: 'homework',
            data: homework,
            success: function () {
              wx.navigateTo({
                url: '../homework/homework',
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
            url: api.ip + 'homework/getHomeworkByClassInOpenid?openid=' + openid + '&page=' + page * 10,
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
        }, 500)
      },
    })
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
    var page = that.data.page
    wx.showLoading({
      title: '正在加载',
    })
    setTimeout(function () {
      wx.getStorage({
        key: 'userOpenid',
        success: function (res) {
          var openid = res.data
          wx.request({
            url: api.ip + 'homework/getHomeworkByClassInOpenid?openid=' + openid + '&page=' + page * 10,
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
                  });
                  if (homeworks.length == 10) {
                    that.setData({
                      hiddenpage: false
                    })
                  }
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