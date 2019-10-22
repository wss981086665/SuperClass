const api = require('../../api.js')
Page({

  data: {
    classes: [],
    hasvalue: true
  },

  tocreatit:function() {
    wx.navigateTo({
      url: '../creatclass/creatclass',
    })
  },

  toStudentList:function(e) {
    var classid = e.currentTarget.dataset.classid
    wx.navigateTo({
      url: '../listStudent/listStudent?classid=' + classid,
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
          url: api.ip + 'democlass/getclass?openid=' + openid,
          success:function(ress){
            var classes = ress.data.result
            if (classes == null) {
              var toastText = '获取数据失败' + ress.data.errMsg;
              wx.showToast({
                title: toastText,
                icon: '',
                duration: 2000 //弹出时间
              })
            } else {
              if (classes.length == 0) {
                that.setData({
                  hasvalue: false
                })
              } else {
                that.setData({
                  classes: classes,
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