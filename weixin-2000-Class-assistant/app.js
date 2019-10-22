//app.js
App({
  onLaunch: function () {
    var that = this

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: function (res) {
        var code = res.code;
        wx.setStorage({
          key: 'code',
          data: code,
        })
      }
    })

  },
  globalData: {
    hasUserInfo: false
  }
})