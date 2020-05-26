//获取应用实例
const app = getApp()

Page({

  data: {
    userInfo: {},
    user: {},
    screenWidth: wx.getSystemInfoSync().windowWidth
  },

  fun1: function () {
    wx.navigateTo({
      url: '../listwork/listwork',
    })
  },

  tocreat: function () {
    wx.navigateTo({
      url: '../creatclass-tip/creatclass-tip',
    })
  },

  applyteacher: function () {
    wx.navigateTo({
      url: '../apply-teacher/apply-teacher',
    })
  },

  clearCache: function () {
    wx.showModal({
      title: '温馨提示',
      content: '请确认是否清理缓存并退出-汇课堂？',
      confirmColor: '#32CD32',
      confirmText: '确定',
      success: function (res) {
        if (res.confirm) {
          wx.clearStorage({
            success: function () {
              wx.login({
                success: function (res) {
                  var code = res.code;
                  wx.setStorage({
                    key: 'code',
                    data: code,
                    success: function () {
                      wx.navigateBack({
                        delta: -1
                      })
                    }
                  })
                }
              })
            }
          })
        } else {
          wx.showToast({
            title: '取消清理缓存',
            icon: 'none'
          })
        }
      }
    })
  },

  sharePage: function() {
    return this.onShareAppMessage()
  },

  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          userInfo: res.data
        })
        wx.getStorage({
          key: 'user',
          success: function (ress) {
            that.setData({
              user: ress.data
            })
          },
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  onShareAppMessage: function () {
    return {
      title: '超级课堂汇',
      desc: '实用的课堂辅助工具!',
      path: '/page/index/index'
    }
  }
})