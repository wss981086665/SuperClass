const api = require('../../api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    students: [],
    hasvalue: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var code = options.code
    wx.request({
      method: 'GET',
      url: api.ip + 'relation/getUserByCode?code=' + code,
      success: function (res) {
        var students = res.data.result
        console.log(students)
        if (students == null) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000 //弹出时间
          })
        } else {
          if (students.length == 0) {
            that.setData({
              hasvalue: false
            })
          } else {
            that.setData({
              students: students,
            });
          }
          setTimeout(function () {
            wx.hideLoading()
          }, 100)
        }
      }
    })
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